/* Phone specifications database - used by compare tool and search */
const phonesData = {
  'samsung-galaxy-s25-ultra': {
    name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s25-ultra',
    image: '/img/phones/s25-ultra.svg',
    price: '$1,299', priceNum: 1299, released: 'January 2025',
    keySpecs: ['6.9"', 'SD 8 Elite', '200MP', '5000mAh']
  },
  'samsung-galaxy-s25': {
    name: 'Samsung Galaxy S25', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s25',
    image: '/img/phones/s25.svg',
    price: '$799', priceNum: 799, released: 'January 2025',
    keySpecs: ['6.2"', 'SD 8 Elite', '50MP', '4000mAh']
  },
  'samsung-galaxy-a56': {
    name: 'Samsung Galaxy A56', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a56',
    image: '/img/phones/a56.svg',
    price: '$449', priceNum: 449, released: 'March 2025',
    keySpecs: ['6.7"', 'Exynos 1580', '50MP', '5000mAh']
  },
  'apple-iphone-16-pro-max': {
    name: 'Apple iPhone 16 Pro Max', brand: 'Apple', brandSlug: 'apple', slug: 'iphone-16-pro-max',
    image: '/img/phones/iphone-16-pro.svg+Max',
    price: '$1,199', priceNum: 1199, released: 'September 2024',
    keySpecs: ['6.9"', 'A18 Pro', '48MP', '4685mAh']
  },
  'apple-iphone-16-pro': {
    name: 'Apple iPhone 16 Pro', brand: 'Apple', brandSlug: 'apple', slug: 'iphone-16-pro',
    image: '/img/phones/iphone-16-pro.svg',
    price: '$999', priceNum: 999, released: 'September 2024',
    keySpecs: ['6.3"', 'A18 Pro', '48MP', '3582mAh']
  },
  'google-pixel-9-pro': {
    name: 'Google Pixel 9 Pro', brand: 'Google', brandSlug: 'google', slug: 'pixel-9-pro',
    image: '/img/phones/pixel-9-pro.svg',
    price: '$999', priceNum: 999, released: 'August 2024',
    keySpecs: ['6.3"', 'Tensor G4', '50MP', '4700mAh']
  },
  'google-pixel-9a': {
    name: 'Google Pixel 9a', brand: 'Google', brandSlug: 'google', slug: 'pixel-9a',
    image: '/img/phones/pixel-9a.svg',
    price: '$499', priceNum: 499, released: 'March 2025',
    keySpecs: ['6.3"', 'Tensor G4', '48MP', '5100mAh']
  },
  'oneplus-13': {
    name: 'OnePlus 13', brand: 'OnePlus', brandSlug: 'oneplus', slug: 'oneplus-13',
    image: '/img/phones/oneplus-13.svg',
    price: '$899', priceNum: 899, released: 'January 2025',
    keySpecs: ['6.82"', 'SD 8 Elite', '50MP', '6000mAh']
  },
  'xiaomi-15-ultra': {
    name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', brandSlug: 'xiaomi', slug: '15-ultra',
    image: '/img/phones/xiaomi-15-ultra.svg',
    price: '$999', priceNum: 999, released: 'February 2025',
    keySpecs: ['6.73"', 'SD 8 Elite', '200MP', '5500mAh']
  },
  'nothing-phone-3': {
    name: 'Nothing Phone (3)', brand: 'Nothing', brandSlug: 'nothing', slug: 'phone-3',
    image: '/img/phones/nothing-3.svg',
    price: '$599', priceNum: 599, released: 'March 2025',
    keySpecs: ['6.5"', 'SD 8s Gen 3', '50MP', '5000mAh']
  },
  'samsung-galaxy-m47': {
    name: 'Samsung Galaxy M47', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m47',
    image: '/img/phones/samsung_samsung-galaxy-m47-1.jpg',
    price: '', priceNum: 0, released: '2026, July 04',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '6000mAh']
  },
  'samsung-galaxy-a27': {
    name: 'Samsung Galaxy A27', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a27',
    image: '/img/phones/samsung_samsung-galaxy-a27.jpg',
    price: '€257.00', priceNum: 257, released: '2026, July 03',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '5000mAh']
  },
  'samsung-galaxy-a57': {
    name: 'Samsung Galaxy A57', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a57',
    image: '/img/phones/samsung_samsung-galaxy-a57.jpg',
    price: '$429.99', priceNum: 429.99, released: '2026, April 9',
    keySpecs: ['6.7"', 'Exynos 1680', '50MP', '5000mAh']
  },
  'samsung-galaxy-a37': {
    name: 'Samsung Galaxy A37', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a37',
    image: '/img/phones/samsung_samsung-galaxy-a37.jpg',
    price: '$329.50', priceNum: 329.5, released: '2026, April 9',
    keySpecs: ['6.7"', 'Exynos 1480', '50MP', '5000mAh']
  },
  'samsung-galaxy-m17e': {
    name: 'Samsung Galaxy M17e', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m17e',
    image: '/img/phones/samsung_samsung-galaxy-m17e.jpg',
    price: '', priceNum: 0, released: '2026, March 17',
    keySpecs: ['6.7"', '6300', '50MP', '6000mAh']
  },
  'samsung-galaxy-s26-ultra': {
    name: 'Samsung Galaxy S26 Ultra', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s26-ultra',
    image: '/img/phones/samsung_samsung-galaxy-s26-ultra-new.jpg',
    price: '$1,030.00', priceNum: 1030, released: '2026, March 06',
    keySpecs: ['6.9"', 'Snapdragon 8 Elite', '200MP', '5000mAh']
  },
  'samsung-galaxy-s26': {
    name: 'Samsung Galaxy S26', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s26',
    image: '/img/phones/samsung_samsung-galaxy-s26.jpg',
    price: '$674.92', priceNum: 674.92, released: '2026, March 06',
    keySpecs: ['6.3"', 'Snapdragon 8 Elite', '50MP', '4300mAh']
  },
  'samsung-galaxy-f70e': {
    name: 'Samsung Galaxy F70e', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f70e',
    image: '/img/phones/samsung_samsung-galaxy-f70e.jpg',
    price: '', priceNum: 0, released: '2026, February 17',
    keySpecs: ['6.7"', '6300', '50MP', '6000mAh']
  },
  'samsung-galaxy-a07': {
    name: 'Samsung Galaxy A07', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a07',
    image: '/img/phones/samsung_samsung-galaxy-a07-5g.jpg',
    price: '€213.68', priceNum: 213.68, released: '2026, January 13',
    keySpecs: ['6.7"', '6300', '50MP', '6000mAh']
  },
  'samsung-galaxy-z-trifold': {
    name: 'Samsung Galaxy Z TriFold', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-trifold',
    image: '/img/phones/samsung_samsung-galaxy-z-trifold-.jpg',
    price: '', priceNum: 0, released: '2025, December 02. Released 2025, December 12',
    keySpecs: ['10.0"', 'Snapdragon 8 Elite', '200MP', '5600mAh']
  },
  'samsung-galaxy-m17': {
    name: 'Samsung Galaxy M17', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m17',
    image: '/img/phones/samsung_samsung-galaxy-a17.jpg',
    price: '', priceNum: 0, released: '2025, October 13',
    keySpecs: ['6.7"', 'Exynos 1330', '50MP', '5000mAh']
  },
  'samsung-galaxy-f07': {
    name: 'Samsung Galaxy F07', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f07',
    image: '/img/phones/samsung_samsung-galaxy-f07.jpg',
    price: '', priceNum: 0, released: '2025, October 04',
    keySpecs: ['6.7"', 'G99', '50MP', '5000mAh']
  },
  'samsung-galaxy-m07': {
    name: 'Samsung Galaxy M07', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m07',
    image: '/img/phones/samsung_samsung-galaxy-m07.jpg',
    price: '$54.98', priceNum: 54.98, released: '2025, October 01',
    keySpecs: ['6.7"', 'G99', '50MP', '5000mAh']
  },
  'samsung-galaxy-a17-4g': {
    name: 'Samsung Galaxy A17 4G', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a17-4g',
    image: '/img/phones/samsung_samsung-galaxy-a17.jpg',
    price: '$149.00', priceNum: 149, released: '2025, September 18',
    keySpecs: ['6.7"', 'G99', '50MP', '5000mAh']
  },
  'samsung-galaxy-tab-a11': {
    name: 'Samsung Galaxy Tab A11', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-tab-a11',
    image: '/img/phones/samsung_samsung-galaxy-tab-a11.jpg',
    price: '', priceNum: 0, released: '2025, September',
    keySpecs: ['8.7"', 'G99', '8MP', '5100mAh']
  },
  'samsung-galaxy-f17': {
    name: 'Samsung Galaxy F17', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f17',
    image: '/img/phones/samsung_samsung-galaxy-f17-5g-.jpg',
    price: '', priceNum: 0, released: '2025, September 14',
    keySpecs: ['6.7"', 'Exynos 1330', '50MP', '5000mAh']
  },
  'samsung-galaxy-s25-fe': {
    name: 'Samsung Galaxy S25 FE', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s25-fe',
    image: '/img/phones/samsung_samsung-galaxy-s25-fe.jpg',
    price: '$391.28', priceNum: 391.28, released: '2025, September 04',
    keySpecs: ['6.7"', 'Exynos 2400', '50MP', '4900mAh']
  },
  'samsung-galaxy-tab-s11-ultra': {
    name: 'Samsung Galaxy Tab S11 Ultra', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-tab-s11-ultra',
    image: '/img/phones/samsung_samsung-galaxy-tab-s11-ultra.jpg',
    price: '$1,097.00', priceNum: 1097, released: '2025, September 04',
    keySpecs: ['14.6"', '9400+', '13MP', '11600mAh']
  },
  'samsung-galaxy-tab-s11': {
    name: 'Samsung Galaxy Tab S11', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-tab-s11',
    image: '/img/phones/samsung_samsung-galaxy-tab-s11.jpg',
    price: '', priceNum: 0, released: '2025, September 04',
    keySpecs: ['11.0"', '9400+', '13MP', '8400mAh']
  },
  'samsung-galaxy-tab-s10-lite': {
    name: 'Samsung Galaxy Tab S10 Lite', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-tab-s10-lite',
    image: '/img/phones/samsung_samsung-galaxy-tab-s10-lite.jpg',
    price: '', priceNum: 0, released: '2025, August 25',
    keySpecs: ['10.9"', 'Exynos 1380', '8MP', '8000mAh']
  },
  'samsung-galaxy-f36': {
    name: 'Samsung Galaxy F36', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f36',
    image: '/img/phones/samsung_samsung-galaxy-f36.jpg',
    price: '', priceNum: 0, released: '2025, July 29',
    keySpecs: ['6.7"', 'Exynos 1380', '50MP', '5000mAh']
  },
  'samsung-galaxy-z-fold7': {
    name: 'Samsung Galaxy Z Fold7', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-fold7',
    image: '/img/phones/samsung_samsung-galaxy-z-fold7.jpg',
    price: '$949.99', priceNum: 949.99, released: '2025, July 25',
    keySpecs: ['8.0"', 'Snapdragon 8 Elite', '200MP', '4400mAh']
  },
  'samsung-galaxy-z-flip7': {
    name: 'Samsung Galaxy Z Flip7', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-flip7',
    image: '/img/phones/samsung_samsung-galaxy-z-flip7.jpg',
    price: '$544.00', priceNum: 544, released: '2025, July 25',
    keySpecs: ['6.9"', 'Exynos 2500', '50MP', '4300mAh']
  },
  'samsung-galaxy-z-flip7-fe': {
    name: 'Samsung Galaxy Z Flip7 FE', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-flip7-fe',
    image: '/img/phones/samsung_samsung-galaxy-z-flip7-fe-.jpg',
    price: '$429.99', priceNum: 429.99, released: '2025, July 25',
    keySpecs: ['6.7"', 'Exynos 2400', '50MP', '4000mAh']
  },
  'samsung-galaxy-watch8-classic': {
    name: 'Samsung Galaxy Watch8 Classic', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-watch8-classic',
    image: '/img/phones/samsung_samsung-galaxy-watch8-classic.jpg',
    price: '€236.35', priceNum: 236.35, released: '2025, July 25',
    keySpecs: ['1.34"', 'Exynos W1000', '445mAh']
  },
  'samsung-galaxy-watch8': {
    name: 'Samsung Galaxy Watch8', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-watch8',
    image: '/img/phones/samsung_samsung-galaxy-watch8.jpg',
    price: '$319.99', priceNum: 319.99, released: '2025, July 25',
    keySpecs: ['1.47"', 'Exynos W1000', '435mAh']
  },
  'samsung-galaxy-m36': {
    name: 'Samsung Galaxy M36', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m36',
    image: '/img/phones/samsung_samsung-galaxy-m36.jpg',
    price: '', priceNum: 0, released: '2025, July 12',
    keySpecs: ['6.7"', 'Exynos 1380', '50MP', '5000mAh']
  },
  'samsung-galaxy-s25-edge': {
    name: 'Samsung Galaxy S25 Edge', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s25-edge',
    image: '/img/phones/samsung_samsung-galaxy-s25-edge.jpg',
    price: '$464.65', priceNum: 464.65, released: '2025, May 29',
    keySpecs: ['6.7"', 'Snapdragon 8 Elite', '200MP', '3900mAh']
  },
  'samsung-galaxy-f56': {
    name: 'Samsung Galaxy F56', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f56',
    image: '/img/phones/samsung_samsung-galaxy-f56-5g.jpg',
    price: '', priceNum: 0, released: '2025, May 14',
    keySpecs: ['6.74"', 'Exynos 1480', '50MP', '5000mAh']
  },
  'samsung-galaxy-m56': {
    name: 'Samsung Galaxy M56', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m56',
    image: '/img/phones/samsung_samsung-galaxy-m56-5g.jpg',
    price: '', priceNum: 0, released: '2025, April 17',
    keySpecs: ['6.74"', 'Exynos 1480', '50MP', '5000mAh']
  },
  'samsung-galaxy-xcover7-pro': {
    name: 'Samsung Galaxy XCover7 Pro', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-xcover7-pro',
    image: '/img/phones/samsung_samsung-galaxy-xcover7-pro-1.jpg',
    price: '$977.36', priceNum: 977.36, released: '2025, May 07',
    keySpecs: ['6.6"', 'Snapdragon 7s Gen', '50MP', '4350mAh']
  },
  'samsung-galaxy-tab-active5-pro': {
    name: 'Samsung Galaxy Tab Active5 Pro', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-tab-active5-pro',
    image: '/img/phones/samsung_samsung-galaxy-tab-active5-pro.jpg',
    price: '', priceNum: 0, released: '2025, May 07',
    keySpecs: ['10.1"', 'Snapdragon 7s Gen', '12MP', '10100mAh']
  },
  'samsung-galaxy-tab-s10-fe': {
    name: 'Samsung Galaxy Tab S10 FE', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-tab-s10-fe',
    image: '/img/phones/samsung_samsung-galaxy-tab-s10-fe.jpg',
    price: '', priceNum: 0, released: '2025, April 03',
    keySpecs: ['10.9"', 'Exynos 1580', '13MP', '8000mAh']
  },
  'samsung-galaxy-f16': {
    name: 'Samsung Galaxy F16', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f16',
    image: '/img/phones/samsung_samsung-galaxy-f16-5g.jpg',
    price: '', priceNum: 0, released: '2025, March 13',
    keySpecs: ['6.7"', '6300', '50MP', '5000mAh']
  },
  'samsung-galaxy-a36': {
    name: 'Samsung Galaxy A36', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a36',
    image: '/img/phones/samsung_samsung-galaxy-a36.jpg',
    price: '$242.45', priceNum: 242.45, released: '2025, March 10',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '5000mAh']
  },
  'samsung-galaxy-a26': {
    name: 'Samsung Galaxy A26', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a26',
    image: '/img/phones/samsung_samsung-galaxy-a26.jpg',
    price: '$164.52', priceNum: 164.52, released: '2025, March 19',
    keySpecs: ['6.7"', 'Exynos 1380 -', '50MP', '5000mAh']
  },
  'samsung-galaxy-m16': {
    name: 'Samsung Galaxy M16', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m16',
    image: '/img/phones/samsung_samsung-galaxy-m16-5g-.jpg',
    price: '', priceNum: 0, released: '2025, March 05',
    keySpecs: ['6.7"', '6300', '50MP', '5000mAh']
  },
  'samsung-galaxy-m06': {
    name: 'Samsung Galaxy M06', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m06',
    image: '/img/phones/samsung_samsung-galaxy-m06-5g.jpg',
    price: '', priceNum: 0, released: '2025, March 07',
    keySpecs: ['6.74"', '6300', '50MP', '5000mAh']
  },
  'samsung-galaxy-a06-5g': {
    name: 'Samsung Galaxy A06 5G', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a06-5g',
    image: '/img/phones/samsung_samsung-galaxy-a06-5g.jpg',
    price: '', priceNum: 0, released: '2025, February 19',
    keySpecs: ['6.7"', '6300', '50MP', '5000mAh']
  },
  'samsung-galaxy-f06-5g': {
    name: 'Samsung Galaxy F06 5G', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f06-5g',
    image: '/img/phones/samsung_samsung-galaxy-f06-5g.jpg',
    price: '', priceNum: 0, released: 'February 20',
    keySpecs: ['6.7"', '6300', '50MP', '5000mAh']
  },
  'samsung-galaxy-z-fold-special': {
    name: 'Samsung Galaxy Z Fold Special', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-fold-special',
    image: '/img/phones/samsung_samsung-galaxy-z-fold-special-edition.jpg',
    price: '', priceNum: 0, released: '2024, October 24',
    keySpecs: ['8.0"', 'Snapdragon 8 Gen', '200MP', '4400mAh']
  }
};

/* News data for search */
const newsData = [
  { slug: 'samsung-galaxy-s26-ultra-leaked', title: 'Samsung Galaxy S26 Ultra Design Leaked — Slimmer Bezels, New Camera Module', category: 'Leaks', date: 'July 5, 2026', image: '/img/news/news1.jpg' },
  { slug: 'apple-m5-chip-benchmarks-revealed', title: 'Apple M5 Chip Benchmarks Revealed — 40% Faster Than M4', category: 'Apple', date: 'July 4, 2026', image: '/img/news/news2.jpg' },
  { slug: 'google-pixel-10-camera-preview', title: 'Google Pixel 10 Camera Preview: AI-Powered Night Sight 3.0', category: 'Google', date: 'July 3, 2026', image: '/img/news/news3.jpg' },
  { slug: 'xiaomi-17-arriving-in-india', title: 'Xiaomi 17 Confirmed to Launch in India Next Month', category: 'Xiaomi', date: 'July 2, 2026', image: '/img/news/news4.jpg' },
  { slug: 'oneplus-14-pro-design-revealed', title: 'OnePlus 14 Pro Design Revealed in Official Renders', category: 'OnePlus', date: 'July 1, 2026', image: '/img/news/news5.jpg' },
  { slug: 'nothing-phone-4-concept-unveiled', title: 'Nothing Phone (4) Concept Features Transparent OLED Back', category: 'Nothing', date: 'June 30, 2026', image: '/img/news/news6.jpg' },
  { slug: 'qualcomm-snapdragon-8-gen5-announced', title: 'Qualcomm Snapdragon 8 Gen 5 Announced with 2nm Process', category: 'Chipsets', date: 'June 29, 2026', image: '/img/news/news7.jpg' },
  { slug: 'android-17-features-revealed', title: 'Android 17 Features Revealed: Desktop Mode, New Notifications', category: 'Android', date: 'June 28, 2026', image: '/img/news/news8.jpg' },
  { slug: 'ios-20-public-beta-available', title: 'iOS 20 Public Beta Now Available — How to Install', category: 'Apple', date: 'June 27, 2026', image: '/img/news/news9.jpg' },
  { slug: 'mediatek-dimensity-10000-benchmark', title: 'MediaTek Dimensity 10000 Benchmarks Challenge Snapdragon 8 Elite', category: 'Chipsets', date: 'June 26, 2026', image: '/img/news/news10.jpg' },
  { slug: 'samsung-confirms-that-the-galaxy-z-fold8-and-z-fold8-ultra-will-use-a-snapdragon', title: 'Samsung confirms that the Galaxy Z Fold8 and Z Fold8 Ultra will use a Snapdragon 8 Elite Gen 5', category: 'Samsung', date: '07 July 2026', image: '/img/news/samsung-confirms-that-the-galaxy-z-fold8-and-z-fold8-ultra-will-use-a-snapdragon_hero.jpg' },
  { slug: 'developer-turns-sonys-headphones-into-realtime-head-tracker-for-pc-simulators', title: 'Developer turns Sony\'s headphones into real-time head tracker for PC simulators', category: 'Sony', date: '07 July 2026', image: 'https://fdn.gsmarena.com/imgroot/news/26/05/sony-1000x-the-collexion-yes-really-ifr/-344x215/gsmarena_000.jpg' },
  { slug: 'nothing-ear-3a-unveiled-with-anc-and-up-to-42-hours-of-total-battery-life', title: 'Nothing Ear (3a) unveiled with ANC and up to 42 hours of total battery life', category: 'Nothing', date: '07 July 2026', image: '/img/news/nothing-ear-3a-unveiled-with-anc-and-up-to-42-hours-of-total-battery-life_hero.jpg' },
  { slug: 'tecno-andvisual-artist-anglica-dass-start-the-100-portraits-of-becoming-initiati', title: 'Tecno and visual artist Angélica Dass start the “100 Portraits of Becoming” initiative', category: 'Tecno', date: '07 July 2026', image: '/img/news/tecno-andvisual-artist-anglica-dass-start-the-100-portraits-of-becoming-initiati_hero.jpg' },
  { slug: 'honor-robot-phone-gets-a-rumored-launch-month', title: 'Honor Robot Phone gets a rumored launch month', category: 'Honor', date: '07 July 2026', image: '/img/news/honor-robot-phone-gets-a-rumored-launch-month_hero.jpg' }
];

/* Reviews data for search */
const reviewsData = [
  { slug: 'samsung-galaxy-s25-ultra-review', title: 'Samsung Galaxy S25 Ultra Review', phone: 'samsung-galaxy-s25-ultra', score: 9.2, verdict: 'The best big-screen Android phone yet', date: 'February 2025' },
  { slug: 'iphone-16-pro-max-review', title: 'iPhone 16 Pro Max Review', phone: 'apple-iphone-16-pro-max', score: 9, verdict: 'Apple refines the formula with stellar battery life', date: 'October 2024' },
  { slug: 'google-pixel-9-pro-review', title: 'Google Pixel 9 Pro Review', phone: 'google-pixel-9-pro', score: 8.8, verdict: 'AI smarts meet excellent cameras', date: 'September 2024' },
  { slug: 'oneplus-13-review', title: 'OnePlus 13 Review', phone: 'oneplus-13', score: 8.9, verdict: 'The flagship killer grows up', date: 'February 2025' },
  { slug: 'xiaomi-15-ultra-review', title: 'Xiaomi 15 Ultra Review', phone: 'xiaomi-15-ultra', score: 8.7, verdict: 'Camera champion with blazing performance', date: 'March 2025' },
  { slug: 'oppo-reno16-review', title: 'Oppo Reno16 review', score: 4.1, verdict: 'In-depth review of the Oppo Reno16', date: 'July 2026', image: '/img/reviews/oppo-reno16-review_thumb.jpg' },
  { slug: 'tecno-pova-8-review', title: 'Tecno Pova 8 review', score: 3.8, verdict: 'In-depth review of the Tecno Pova 8', date: 'July 2026', image: '/img/reviews/tecno-pova-8-review_thumb.jpg' },
  { slug: 'motorola-razr-fold-review', title: 'Motorola Razr Fold review', score: 4.7, verdict: 'In-depth review of the Motorola Razr Fold', date: 'July 2026', image: '/img/reviews/motorola-razr-fold-review_thumb.jpg' },
  { slug: 'oppo-reno16-pro-review', title: 'Oppo Reno16 Pro review', score: 4.2, verdict: 'In-depth review of the Oppo Reno16 Pro', date: 'July 2026', image: '/img/reviews/oppo-reno16-pro-review_thumb.jpg' },
  { slug: 'motorola-razr-70-ultra-review', title: 'Motorola Razr 70 Ultra/Razr Ultra 2026 review', score: 4.3, verdict: 'In-depth review of the Motorola Razr 70 Ultra/Razr Ultra 2026', date: 'July 2026', image: '/img/reviews/motorola-razr-70-ultra-review_thumb.jpg' },
  { slug: 'samsung-galaxy-a27-review', title: 'Samsung Galaxy A27 review', score: 3.5, verdict: 'In-depth review of the Samsung Galaxy A27', date: 'July 2026', image: '/img/reviews/samsung-galaxy-a27-review_thumb.jpg' }
];
