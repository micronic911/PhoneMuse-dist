/* Phone specifications database - used by compare tool and search */
const phonesData = {
  'samsung-galaxy-f70-pro': {
    name: 'Samsung Galaxy F70 Pro', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f70-pro',
    image: '/img/phones/samsung_samsung-galaxy-f70-pro.webp',
    price: '', priceNum: 0, released: '2026, August 03',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '6000mAh']
  },
  'samsung-galaxy-z-fold8-ultra': {
    name: 'Samsung Galaxy Z Fold8 Ultra', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-fold8-ultra',
    image: '/img/phones/samsung_samsung-galaxy-z-fold8-ultra-r1.webp',
    price: '$2,099.99', priceNum: 2099.99, released: '2026, July 22',
    keySpecs: ['8.0"', 'Snapdragon 8 Elite', '200MP', '5000mAh'],
    reviewUrl: '/reviews/samsung-galaxy-z-fold8-ultra-review'
  },
  'samsung-galaxy-z-fold8': {
    name: 'Samsung Galaxy Z Fold8', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-fold8',
    image: '/img/phones/samsung_samsung-galaxy-z-fold8.webp',
    price: '$1,899.99', priceNum: 1899.99, released: '2026, July 22',
    keySpecs: ['7.6"', 'Snapdragon 8 Elite', '50MP', '4800mAh'],
    reviewUrl: '/reviews/samsung-galaxy-z-fold8-review'
  },
  'samsung-galaxy-z-flip8': {
    name: 'Samsung Galaxy Z Flip8', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-z-flip8',
    image: '/img/phones/samsung_samsung-galaxy-z-flip8.webp',
    price: '$1,199.99', priceNum: 1199.99, released: '2026, July 22',
    keySpecs: ['6.9"', 'Snapdragon 8 Elite', '50MP', '4300mAh'],
    reviewUrl: '/reviews/galaxy-z-fold8-z-fold8-ultra-z-flp8-handson-review'
  },
  'samsung-galaxy-watch-ultra2': {
    name: 'Samsung Galaxy Watch Ultra2', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-watch-ultra2',
    image: '/img/phones/samsung_samsung-galaxy-watch-ultra2.webp',
    price: '$699.99', priceNum: 699.99, released: '2026, August 07',
    keySpecs: ['1.52"', 'Snapdragon SW6100 Wear', '800mAh']
  },
  'samsung-galaxy-watch9': {
    name: 'Samsung Galaxy Watch9', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-watch9',
    image: '/img/phones/samsung_samsung-galaxy-watch9-.webp',
    price: '$379.99', priceNum: 379.99, released: '2026, August 07',
    keySpecs: ['1.47"', 'Snapdragon SW6100 Wear', '445mAh']
  },
  'samsung-galaxy-m47': {
    name: 'Samsung Galaxy M47', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m47',
    image: '/img/phones/samsung_samsung-galaxy-m47.webp',
    price: '', priceNum: 0, released: '2026, July 04',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '6000mAh']
  },
  'samsung-galaxy-a27': {
    name: 'Samsung Galaxy A27', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a27',
    image: '/img/phones/samsung_samsung-galaxy-a27.webp',
    price: '€233.84', priceNum: 233.84, released: '2026, July 03',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '5000mAh'],
    reviewUrl: '/reviews/samsung-galaxy-a27-review'
  },
  'samsung-galaxy-a57': {
    name: 'Samsung Galaxy A57', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a57',
    image: '/img/phones/samsung_samsung-galaxy-a57.webp',
    price: '$424.99', priceNum: 424.99, released: '2026, April 9',
    keySpecs: ['6.7"', 'Exynos 1680', '50MP', '5000mAh'],
    reviewUrl: '/reviews/samsung-galaxy-a57-review'
  },
  'samsung-galaxy-a37': {
    name: 'Samsung Galaxy A37', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a37',
    image: '/img/phones/samsung_samsung-galaxy-a37.webp',
    price: '$374.99', priceNum: 374.99, released: '2026, April 9',
    keySpecs: ['6.7"', 'Exynos 1480', '50MP', '5000mAh'],
    reviewUrl: '/reviews/samsung-galaxy-a37-review'
  }
};

/* News data for search */
const newsData = [
  { slug: 'samsung-unveils-isocell-hpc-its-first-sensor-with-deeppix-technology', title: 'Samsung unveils ISOCELL HPC, its first sensor with DeepPix technology', category: 'Samsung', date: '07 August 2026', image: '/img/news/samsung-unveils-isocell-hpc-its-first-sensor-with-deeppix-technology_thumb.webp', articleId: '74062' },
  { slug: 'google-wallet-now-lets-you-set-up-a-dedicated-balance-for-your-kids-and-teens', title: 'Google Wallet now lets you set up a dedicated balance for your kids and teens', category: 'Google', date: '07 August 2026', image: '/img/news/google-wallet-now-lets-you-set-up-a-dedicated-balance-for-your-kids-and-teens_thumb.webp', articleId: '74054' },
  { slug: 'iqoo-z11-india-processor-colors-confirmed', title: 'Indian iQOO Z11\'s processor officially confirmed, and it\'s different from other models', category: 'iQOO', date: '07 August 2026', image: '/img/news/iqoo-z11-india-processor-colors-confirmed_thumb.webp', articleId: '74057' },
  { slug: 'chatgpt-gives-free-users-unlimited-text-chats-while-improving-its-flagship-model', title: 'ChatGPT gives free users unlimited text chats while improving its flagship model', category: 'ChatGPT', date: '07 August 2026', image: '/img/news/chatgpt-gives-free-users-unlimited-text-chats-while-improving-its-flagship-model_thumb.webp', articleId: '74056' },
  { slug: 'oppo-kicks-off-coloros-17-closed-beta-testing-device-list-and-rollout-dates-in-t', title: 'Oppo kicks off ColorOS 17 Closed Beta Testing, device list and rollout dates confirmed', category: 'Oppo', date: '07 August 2026', image: '/img/news/oppo-kicks-off-coloros-17-closed-beta-testing-device-list-and-rollout-dates-in-t_thumb.webp', articleId: '74052' },
  { slug: 'ask-maps-in-google-maps-can-now-order-food-for-you-and-remember-your-past-conver', title: 'Ask Maps in Google Maps can now order food for you and remember your past conversations', category: 'Google', date: '07 August 2026', image: '/img/news/ask-maps-in-google-maps-can-now-order-food-for-you-and-remember-your-past-conver_thumb.webp', articleId: '74050' },
  { slug: 'poco-carnival-2026-celebrates-eight-years-of-bold-innovation-from-8-to-', title: 'POCO Carnival 2026 Celebrates Eight Years of Bold Innovation, From 8 to ∞', category: 'POCO', date: '07 August 2026', image: '/img/news/poco-carnival-2026-celebrates-eight-years-of-bold-innovation-from-8-to-_thumb.webp', articleId: '74002' },
  { slug: 'freshly-leaked-samsung-galaxy-s26-fe-renders-show-all-three-colors', title: 'Freshly leaked Samsung Galaxy S26 FE renders show all three colors', category: 'Samsung', date: '07 August 2026', image: '/img/news/freshly-leaked-samsung-galaxy-s26-fe-renders-show-all-three-colors_thumb.webp', articleId: '74055' },
  { slug: 'gta-vi-extended-look-is-coming-later-this-month-to-netflix', title: 'GTA VI extended look is coming later this month to Netflix', category: 'Gaming', date: '07 August 2026', image: '/img/news/gta-vi-extended-look-is-coming-later-this-month-to-netflix_thumb.webp', articleId: '74053' },
  { slug: 'leaked-bose-quietcomfort-2nd-gen-renders-reveal-refreshed-design-color-options', title: 'Leaked Bose QuietComfort (2nd Gen) renders reveal refreshed design, color options', category: 'Bose', date: '07 August 2026', image: '/img/news/leaked-bose-quietcomfort-2nd-gen-renders-reveal-refreshed-design-color-options_thumb.webp', articleId: '74051' },
  { slug: 'nintendo-reports-that-operating-profit-more-than-doubled-last-quarter-despite-lo', title: 'Nintendo reports that operating profit more than doubled last quarter despite lower net sales', category: 'Nintendo', date: '07 August 2026', image: '/img/news/nintendo-reports-that-operating-profit-more-than-doubled-last-quarter-despite-lo_thumb.webp', articleId: '74049' },
  { slug: 'apple-wants-to-get-chinese-dram-on-the-cheap-cxmt-says-no', title: 'Apple\'s offer to get Chinese DRAM on the cheap denied by CXMT', category: 'Apple', date: '06 August 2026', image: '/img/news/apple-wants-to-get-chinese-dram-on-the-cheap-cxmt-says-no_thumb.webp', articleId: '74048' },
  { slug: 'samsung-galaxy-z-fold8-vs-samsung-galaxy-z-fold8-ultra', title: 'Samsung Galaxy Z Fold8 vs. Samsung Galaxy Z Fold8 Ultra', category: 'Samsung', date: '06 August 2026', image: '/img/news/samsung-galaxy-z-fold8-vs-samsung-galaxy-z-fold8-ultra_thumb.webp', articleId: '73985' },
  { slug: 'samsung-galaxy-s26-fe-passes-through-the-fcc', title: 'Samsung Galaxy S26 FE passes through the FCC', category: 'Samsung', date: '06 August 2026', image: '/img/news/samsung-galaxy-s26-fe-passes-through-the-fcc_thumb.webp', articleId: '74047' },
  { slug: 'sunbird-the-android-app-that-does-imessage-returns-from-the-dead-with-an-open-be', title: 'Sunbird, the Android app that does iMessage, returns from the dead with an open beta', category: 'Android', date: '06 August 2026', image: '/img/news/sunbird-the-android-app-that-does-imessage-returns-from-the-dead-with-an-open-be_thumb.webp', articleId: '74046' },
  { slug: 'samsung-galaxy-z-fold8-ultra-fold8-flip8-europe-pre-order-record', title: 'Galaxy Z Fold8 duo and Galaxy Z Flip8 become Samsung\'s most pre-ordered foldables in Europe', category: 'Samsung', date: '06 August 2026', image: '/img/news/samsung-galaxy-z-fold8-ultra-fold8-flip8-europe-pre-order-record_thumb.webp', articleId: '74043' },
  { slug: 'detailed-google-pixel-watch-5-leak-shows-off-key-watch-features', title: 'Detailed Google Pixel Watch 5 leak shows off key watch features', category: 'Google', date: '06 August 2026', image: '/img/news/detailed-google-pixel-watch-5-leak-shows-off-key-watch-features_thumb.webp', articleId: '74039' },
  { slug: 'the-galaxy-z-fold8-z-fold8-ultra-and-z-flip8-launch-globally-tomorrow', title: 'The Galaxy Z Fold8, Z Fold8 Ultra and Z Flip8 launch globally tomorrow', category: 'Samsung', date: '06 August 2026', image: '/img/news/the-galaxy-z-fold8-z-fold8-ultra-and-z-flip8-launch-globally-tomorrow_thumb.webp', articleId: '74041' },
  { slug: 'hmd-215-4g-and-hmd-235-4g-listed-on-online-retailer-hmd-3210-joins-them', title: 'HMD 215 4G and HMD 235 4G listed by online retailer, HMD 3210 joins them', category: 'HMD', date: '06 August 2026', image: '/img/news/hmd-215-4g-and-hmd-235-4g-listed-on-online-retailer-hmd-3210-joins-them_thumb.webp', articleId: '74044' },
  { slug: 'googles-rumored-pixel-glow-feature-may-launch-as-hilight-supported-colors-leak', title: 'Google\'s rumored Pixel Glow feature may launch as HiLight, supported colors leak', category: 'Google', date: '06 August 2026', image: '/img/news/googles-rumored-pixel-glow-feature-may-launch-as-hilight-supported-colors-leak_thumb.webp', articleId: '74037' }
];

/* Reviews data for search */
const reviewsData = [
  { slug: 'samsung-galaxy-z-fold8-ultra-review', title: 'Samsung Galaxy Z Fold8 Ultra review', score: 4.6, verdict: 'In-depth review of the Samsung Galaxy Z Fold8 Ultra', date: 'August 2026', image: '/img/reviews/samsung-galaxy-z-fold8-ultra-review_thumb.webp', reviewId: '2985' },
  { slug: 'samsung-galaxy-z-fold8-review', title: 'Samsung Galaxy Z Fold8 review', score: 4.6, verdict: 'In-depth review of the Samsung Galaxy Z Fold8', date: 'August 2026', image: '/img/reviews/samsung-galaxy-z-fold8-review_thumb.webp', reviewId: '2984' },
  { slug: 'huawei-pura-90s-pro-max-review', title: 'Huawei Pura 90s Pro Max review', score: 4.2, verdict: 'In-depth review of the Huawei Pura 90s Pro Max', date: 'August 2026', image: '/img/reviews/huawei-pura-90s-pro-max-review_thumb.webp', reviewId: '2983' },
  { slug: 'galaxy-z-fold8-z-fold8-ultra-z-flp8-handson-review', title: 'Samsung Galaxy Z Fold8, Z Fold8 Ultra, Z Flip8 hands-on review', score: 0, verdict: 'In-depth review of the Samsung Galaxy Z Fold8, Z Fold8 Ultra, Z Flip8 hands-on', date: 'August 2026', image: '/img/reviews/galaxy-z-fold8-z-fold8-ultra-z-flp8-handson-review_thumb.webp', reviewId: '2982' },
  { slug: 'redmi-note-15-pro-4g-review', title: 'Xiaomi Redmi Note 15 Pro 4G review', score: 3.7, verdict: 'In-depth review of the Xiaomi Redmi Note 15 Pro 4G', date: 'August 2026', image: '/img/reviews/redmi-note-15-pro-4g-review_thumb.webp', reviewId: '2981' }
];
