import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { BRANCHES, CITIES, CITY_LABELS, MAP_CENTER, MAP_ZOOM, directionsUrl, type Branch } from '@/data/locations';
import { useLang, L as makeL } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { SmartImage } from '@/components/ui/SmartImage';
import { cn } from '@/lib/utils';

/** Custom branded pin using a divIcon (avoids the Leaflet default-icon asset bug). */
function makeIcon(active: boolean) {
  return L.divIcon({
    className: '',
    html: `
      <div class="kaldis-pin" style="
        width: 34px; height: 34px; border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        background: ${active ? 'linear-gradient(135deg,#E6CD77,#C9A227)' : '#003349'};
        border: 2px solid #fff; box-shadow: 0 8px 20px rgba(18,11,7,.45);
        display: grid; place-items: center;">
        <div style="width: 10px; height: 10px; border-radius: 50%; background: ${active ? '#1B110A' : '#C9A227'}; transform: rotate(45deg);"></div>
      </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -32],
  });
}

/** Keeps the map centered/fitted when the active branch or filter changes. */
function MapController({ active, branches }: { active: Branch | null; branches: Branch[] }) {
  const map = useMap();
  const firstRun = useRef(true);
  useEffect(() => {
    // Let the initial MAP_CENTER/MAP_ZOOM stand on first mount — fitting all
    // branches (Addis → Bahir Dar) would zoom the map out too far (~zoom 7).
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (active) {
      map.flyTo([active.lat, active.lng], Math.max(map.getZoom(), 13), { duration: 1.1 });
    } else if (branches.length === 1) {
      const [branch] = branches;
      map.flyTo([branch.lat, branch.lng], 14, { duration: 1.1 });
    } else if (branches.length > 1) {
      map.flyToBounds(
        L.latLngBounds(branches.map((b) => [b.lat, b.lng] as [number, number])),
        { padding: [48, 48], duration: 1.1 },
      );
    }
  }, [active, branches, map]);
  return null;
}

export default function LocationsPage() {
  const { t } = useLang();
  const [city, setCity] = useState('All');
  const [activeId, setActiveId] = useState<string | null>(null);

  const branches = useMemo(
    () => (city === 'All' ? BRANCHES : BRANCHES.filter((b) => b.city === city)),
    [city],
  );
  const active = BRANCHES.find((b) => b.id === activeId) ?? null;

  return (
    <>
      <Seo
        title={makeL('ቅርንጫፎች — ካልዲስ ኮፊ | በመላ ኢትዮጵያ ከ33 በላይ ካፌዎች', 'Locations — Kaldi\'s Coffee | 33+ Cafés Across Ethiopia')}
        description={makeL(
          'በአቅራቢያዎ ያለ ካልዲስ ኮፊ ያግኙ። በአዲስ አበባ፣ ደብረ ዘይት፣ አዳማ እና ባሕር ዳር የቅርንጫፍ አድራሻዎች፣ አቅጣጫዎች እና የተረጋገጠ የዋና ቅርንጫፍ ሰዓት።',
          'Find a Kaldi\'s Coffee near you. Branch addresses, directions and verified flagship hours across Addis Ababa, Debre Zeyit, Adama and Bahir Dar.',
        )}
        path="/locations"
      />

      {/* Header */}
      <header className="relative overflow-hidden bg-espresso-950 pb-20 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(makeL('ቅርንጫፎች', 'Locations · ቅርንጫፎች'))}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">
            {t(makeL('የእርስዎን', 'Find your'))}{' '}
            <span className="italic text-gold-300">{t(makeL("ቅርብ ያለ ካልዲስ ያግኙ", "nearest Kaldi's"))}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {t(
              makeL(
                'በአዲስ አበባ፣ ደብረ ዘይት፣ አዳማ እና ባሕር ዳር ከ33 በላይ ካፌዎች — እያንዳንዱ ቅርንጫፍ ተመሳሳይ የኢትዮጵያ ቡና እና ተመሳሳይ ሞቅ ያለ አቀባበል ይሰጣል።',
                '33+ cafés across Addis Ababa, Debre Zeyit, Adama and Bahir Dar — every branch serves the same Ethiopian coffee and the same warm welcome.',
              ),
            )}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        {/* City filter */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {CITIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCity(c);
                setActiveId(null);
              }}
              className={cn(
                'rounded-full px-5 py-2.5 font-accent text-xs font-semibold uppercase tracking-wide transition-all duration-300',
                city === c
                  ? 'bg-prussian text-gold-300 shadow-soft'
                  : 'bg-white text-espresso-700/70 hover:bg-sand',
              )}
            >
              {t(CITY_LABELS[c])}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Branch cards */}
          <div className="space-y-5">
            <AnimatePresence initial={false}>
              {branches.map((branch, i) => (
                <motion.article
                  key={branch.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onMouseEnter={() => setActiveId(branch.id)}
                  onClick={() => setActiveId(branch.id)}
                  onFocus={() => setActiveId(branch.id)}
                  tabIndex={0}
                  className={cn(
                    'group cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all duration-500 hover:shadow-lift',
                    activeId === branch.id
                      ? 'border-gold-500/60 shadow-soft ring-2 ring-gold-500/20'
                      : 'border-espresso-900/8 shadow-soft',
                  )}
                >
                  <div className="flex gap-5 p-5">
                    <SmartImage
                      src={branch.image}
                      alt={`${t(branch.name)} ${t(makeL('ካፌ', 'café'))}`}
                      className="h-28 w-28 shrink-0 rounded-2xl"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h2 className="font-display text-xl font-semibold text-espresso-900">
                            {t(branch.area)}
                          </h2>
                          <p className="text-xs font-medium uppercase tracking-widest text-gold-600">
                            {t(CITY_LABELS[branch.city])}
                          </p>
                        </div>
                        {branch.flagship && (
                          <span className="rounded-full bg-gold-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-700">
                            {t(makeL('ዋና ቅርንጫፍ', 'Flagship'))}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 flex items-start gap-1.5 text-sm text-espresso-700/80">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                        {t(branch.address)}
                      </p>
                      {branch.phone && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-espresso-700/80">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                          <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-gold-600">
                            {branch.phone}
                          </a>
                        </p>
                      )}
                      {branch.hours && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-espresso-700/80">
                          <Clock className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                          {t(branch.hours)}
                        </p>
                      )}
                      <a
                        href={directionsUrl(branch)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-espresso-900 px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-gold-600 hover:text-espresso-950"
                      >
                        <Navigation className="h-3.5 w-3.5" /> {t(makeL('አቅጣጫ ያግኙ', 'Get Directions'))}
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Map */}
          <div className="sticky top-24 h-[520px] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-espresso-900/10 lg:h-[calc(100vh-140px)]">
            <MapContainer
              center={MAP_CENTER}
              zoom={MAP_ZOOM}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapController active={active} branches={branches} />
              {branches.map((branch) => (
                <Marker
                  key={branch.id}
                  position={[branch.lat, branch.lng]}
                  icon={makeIcon(activeId === branch.id)}
                  eventHandlers={{ click: () => setActiveId(branch.id) }}
                >
                  <Popup>
                    <div className="min-w-[180px]">
                      <p className="font-display text-base font-semibold text-espresso-900">
                        {t(branch.name)}
                      </p>
                      <p className="mt-1 text-xs text-espresso-700">{t(branch.address)}</p>
                      {branch.phone && (
                        <p className="mt-1 text-xs font-medium text-gold-700">{branch.phone}</p>
                      )}
                      <a
                        href={directionsUrl(branch)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-astronaut underline"
                      >
                        {t(makeL('አቅጣጫ ያግኙ →', 'Get directions →'))}
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
}
