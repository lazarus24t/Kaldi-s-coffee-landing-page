/**
 * Centralized image registry.
 * All photography is hot-linked from Unsplash (free license) and served via
 * images.weserv-like params. `SmartImage` falls back gracefully if any fail.
 */
const u = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ''}`;

export const IMG = {
  // Hero & atmosphere
  /** Local flagship-café photo (user-supplied) used as the hero backdrop. */
  heroCafe: '/images/hero-cafe.png',
  /** Local photo (user-supplied) used for the Our Story section. */
  brandStory: '/images/brand-story.png',
  heroPour: u('photo-1495474472287-4d71bcdd2085', 1920, 1280),
  steamCup: u('photo-1509042239860-f550ce710b93', 1600, 1066),
  espresso: u('photo-1511920170033-f8396924c348', 1200),
  latteArt: u('photo-1511537190424-bbbab87ac5eb', 1200),
  milkPour: u('photo-1587080413959-06b859fb107d', 1200),
  chemex: u('photo-1541167760496-1628856ab772', 1200),
  cupSteam: u('photo-1459755486867-b55449bb39ff', 1200),
  pourOver: u('photo-1572442388796-11668a67e53d', 1200),
  pourOver2: u('photo-1561043433-aaf5e0481e26', 1200),
  cupBeans: u('photo-1524350876685-274059332603', 1200),
  cupJournal: u('photo-1497935586351-b67a49e012bf', 1200),
  beans: u('photo-1447933601403-0c6688de566e', 1200),
  roasting: u('photo-1461023058943-07fcbe16d735', 1200),
  barista: u('photo-1559925393-8be0ec4767c8', 1200),
  barista2: u('photo-1610632380989-680fe40816c6', 1200),
  cafeInterior: u('photo-1521017432531-fbd92d768814', 1200),
  cafeInterior2: u('photo-1554118811-1e0d58224f24', 1200),
  cafeInterior3: u('photo-1611854779393-1b2da9d400fe', 1200),
  cupDark: u('photo-1521302080334-4bebac2763a6', 1200),
  cupBrown: u('photo-1600093463592-8e36ae95ef56', 1200),
  cupTable: u('photo-1610889556528-9a770e32642f', 1200),
  cupSaucer: u('photo-1498804103079-a6351b050096', 1200),

  // Ethiopian heritage
  ceremony: u('photo-1594631252845-29fc4cc8cde9', 1600, 1066),
  ethiopia: u('photo-1529336953128-a85760f58a5b', 1600, 1066),
  highlands: u('photo-1508804185872-d7badad00f7d', 1920, 1080),
  /** Local coffee-harvest photo (user-supplied) — farmers drying cherries on raised beds. */
  harvest: '/images/sustainability-harvest.png',
  valley: u('photo-1523805009345-7448845a9e53', 1600),

  // Food & pastry
  croissant: u('photo-1555507036-ab1f4038808a', 900),
  croissant2: u('photo-1563620915-84703cb8dd7a', 900),
  bread: u('photo-1509440159596-0249088772ff', 900),
  cake: u('photo-1517430816045-df4b7de11d1d', 900),
  donuts: u('photo-1562376552-0d160a2f238d', 900),
  breakfast: u('photo-1484723091739-30a097e8f929', 900),
  pancakes: u('photo-1525351484163-7529414344d8', 900),
  salad: u('photo-1546069901-ba9599a7e63c', 900),
  bowl: u('photo-1540189549336-e6e99c3679fe', 900),
  toast: u('photo-1482049016688-2d3e1b311543', 900),
  bowl2: u('photo-1476224203421-9ac39bcb3327', 900),
  veganBowl: u('photo-1512621776951-a57141f2eefd', 900),

  // Menu photography (subjects verified: each matches the menu item)
  /** Classic cheeseburger — for the Burgers menu item. */
  burger: u('photo-1568901346375-23c9450c58cd', 900),
  /** Thick sliced deli sandwich — for the Sandwiches menu item. */
  sandwich: u('photo-1481070414801-51fd732d7184', 900),
  /** Chocolate layer cake with cherries — for Black Forest Cake. */
  blackForest: u('photo-1606890737304-57a1ca8a5b62', 900),
  /** Latte-art cup — for the Macchiato menu item. */
  macchiatoCup: u('photo-1572442388796-11668a67e53d', 900),
  /** Local banana cake photo (user-supplied) — golden loaf with a slice cut, for the Banana Cake menu item. */
  bananaCake: '/images/banana-cake.png',

  // Merch
  mug: u('photo-1514228742587-6b1558fcca3d', 900),
  mugWhite: u('photo-1503602642458-232111445657', 900),
  tote: u('photo-1591561954557-26941169b49e', 900),
  tshirt: u('photo-1523381210434-271e8be1f52b', 900),
  giftbox: u('photo-1549465220-1a8b9238cd48', 900),
  beansSack: u('photo-1514432324607-a09d9b4aefdd', 900),

  // Portraits
  /** Local photo of Tsedey Asrat (user-supplied) — founder portrait. */
  portraitTsedey: '/images/tsedey-asrat.png',
  portraitWoman1: u('photo-1494790108377-be9c29b29330', 400, 400),
  portraitWoman2: u('photo-1438761681033-6461ffad8d80', 400, 400),
  portraitMan1: u('photo-1507003211169-0a1dd7228f2d', 400, 400),
  portraitMan2: u('photo-1472099645785-5658abf4ff4e', 400, 400),
  portraitWoman3: u('photo-1544005313-94ddf0286df2', 400, 400),
  portraitMan3: u('photo-1500648767791-00dcc994a43e', 400, 400),
} as const;

export type ImageKey = keyof typeof IMG;
