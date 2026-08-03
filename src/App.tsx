import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLang, L } from '@/lib/i18n';
import { Layout } from '@/components/layout/Layout';

// Route-level code splitting: each page is its own chunk.
const HomePage = lazy(() => import('@/pages/HomePage'));
const MenuPage = lazy(() => import('@/pages/MenuPage'));
const LocationsPage = lazy(() => import('@/pages/LocationsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ShopPage = lazy(() => import('@/pages/ShopPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/** Minimal branded loader shown while a route chunk downloads. */
function RouteLoader() {
  const { t } = useLang();
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/images/logo.png"
          alt="Kaldi's Coffee"
          className="h-16 w-auto animate-floaty drop-shadow-lg"
        />
        <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-espresso-600">
          {t(L('ቡና እየተዘጋጀ ነው…', 'Brewing…'))}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
