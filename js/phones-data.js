/* Phone specifications database - used by compare tool and search */
const phonesData = {
  'samsung-galaxy-s25-ultra': {
    name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s25-ultra',
    image: '/img/phones/s25-ultra.svg',
    price: '$1,299', priceNum: 1299, released: 'January 2025',
    keySpecs: ['6.9"', 'SD 8 Elite', '200MP', '5000mAh'],
    specs: {
      display: { 'Size': '6.9 inches', 'Resolution': '3120 x 1440 (QHD+)', 'Type': 'Dynamic AMOLED 2X', 'Refresh Rate': '120Hz LTPO', 'Protection': 'Gorilla Armor 2' },
      performance: { 'Chipset': 'Snapdragon 8 Elite', 'CPU': 'Octa-core (2x4.47 GHz + 6x3.53 GHz)', 'GPU': 'Adreno 830', 'RAM': '12 GB', 'Storage': '256GB / 512GB / 1TB' },
      camera: { 'Main': '200 MP, f/1.7, OIS', 'Ultrawide': '50 MP, f/1.9', 'Telephoto': '50 MP, f/2.6, 5x optical', 'Telephoto 2': '10 MP, f/2.4, 3x optical', 'Front': '12 MP, f/2.2' },
      battery: { 'Capacity': '5000 mAh', 'Wired Charging': '45W', 'Wireless': '15W Qi2', 'Reverse Wireless': 'Yes' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.4', 'USB': 'Type-C 3.2', 'NFC': 'Yes' },
      general: { 'OS': 'Android 15, One UI 7', 'Dimensions': '162.8 x 77.6 x 8.2 mm', 'Weight': '218 g', 'IP Rating': 'IP68', 'Colors': 'Titanium Black, Gray, Blue, Silver' }
    }
  },
  'samsung-galaxy-s25': {
    name: 'Samsung Galaxy S25', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s25',
    image: '/img/phones/s25.svg',
    price: '$799', priceNum: 799, released: 'January 2025',
    keySpecs: ['6.2"', 'SD 8 Elite', '50MP', '4000mAh'],
    specs: {
      display: { 'Size': '6.2 inches', 'Resolution': '2340 x 1080 (FHD+)', 'Type': 'Dynamic AMOLED 2X', 'Refresh Rate': '120Hz LTPO', 'Protection': 'Gorilla Victus 2' },
      performance: { 'Chipset': 'Snapdragon 8 Elite', 'CPU': 'Octa-core', 'GPU': 'Adreno 830', 'RAM': '8 GB', 'Storage': '128GB / 256GB' },
      camera: { 'Main': '50 MP, f/1.8, OIS', 'Ultrawide': '12 MP, f/2.2', 'Telephoto': '10 MP, f/2.4, 3x optical', 'Front': '12 MP, f/2.2' },
      battery: { 'Capacity': '4000 mAh', 'Wired Charging': '25W', 'Wireless': '15W', 'Reverse Wireless': 'Yes' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.4', 'USB': 'Type-C 3.2', 'NFC': 'Yes' },
      general: { 'OS': 'Android 15, One UI 7', 'Dimensions': '146.9 x 70.1 x 7.2 mm', 'Weight': '162 g', 'IP Rating': 'IP68', 'Colors': 'Navy, Silver, Mint, Icy Blue' }
    }
  },
  'samsung-galaxy-a56': {
    name: 'Samsung Galaxy A56', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a56',
    image: '/img/phones/a56.svg',
    price: '$449', priceNum: 449, released: 'March 2025',
    keySpecs: ['6.7"', 'Exynos 1580', '50MP', '5000mAh'],
    specs: {
      display: { 'Size': '6.7 inches', 'Resolution': '2340 x 1080 (FHD+)', 'Type': 'Super AMOLED', 'Refresh Rate': '120Hz', 'Protection': 'Gorilla Glass Victus' },
      performance: { 'Chipset': 'Exynos 1580', 'CPU': 'Octa-core', 'GPU': 'Xclipse 540', 'RAM': '8 GB', 'Storage': '128GB / 256GB' },
      camera: { 'Main': '50 MP, f/1.8, OIS', 'Ultrawide': '12 MP, f/2.2', 'Macro': '5 MP, f/2.4', 'Front': '12 MP, f/2.2' },
      battery: { 'Capacity': '5000 mAh', 'Wired Charging': '25W', 'Wireless': 'No', 'Reverse Wireless': 'No' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 6', 'Bluetooth': '5.3', 'USB': 'Type-C 2.0', 'NFC': 'Yes' },
      general: { 'OS': 'Android 15, One UI 7', 'Dimensions': '164.0 x 77.0 x 7.9 mm', 'Weight': '190 g', 'IP Rating': 'IP67', 'Colors': 'Black, Lilac, Lime, Blue' }
    }
  },
  'apple-iphone-16-pro-max': {
    name: 'Apple iPhone 16 Pro Max', brand: 'Apple', brandSlug: 'apple', slug: 'iphone-16-pro-max',
    image: '/img/phones/iphone-16-pro.svg+Max',
    price: '$1,199', priceNum: 1199, released: 'September 2024',
    keySpecs: ['6.9"', 'A18 Pro', '48MP', '4685mAh'],
    specs: {
      display: { 'Size': '6.9 inches', 'Resolution': '2868 x 1320', 'Type': 'LTPO Super Retina XDR OLED', 'Refresh Rate': '120Hz ProMotion', 'Protection': 'Ceramic Shield' },
      performance: { 'Chipset': 'Apple A18 Pro', 'CPU': '6-core (2P + 4E)', 'GPU': '6-core Apple GPU', 'RAM': '8 GB', 'Storage': '256GB / 512GB / 1TB' },
      camera: { 'Main': '48 MP, f/1.78, OIS', 'Ultrawide': '48 MP, f/2.2', 'Telephoto': '12 MP, f/2.8, 5x optical', 'Front': '12 MP, f/1.9, TrueDepth' },
      battery: { 'Capacity': '4685 mAh', 'Wired Charging': '27W MagSafe', 'Wireless': '25W MagSafe', 'Reverse Wireless': 'No' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.3', 'USB': 'Type-C 3.0', 'NFC': 'Yes' },
      general: { 'OS': 'iOS 18', 'Dimensions': '163.0 x 77.6 x 8.25 mm', 'Weight': '227 g', 'IP Rating': 'IP68', 'Colors': 'Black, White, Natural, Desert Titanium' }
    }
  },
  'apple-iphone-16-pro': {
    name: 'Apple iPhone 16 Pro', brand: 'Apple', brandSlug: 'apple', slug: 'iphone-16-pro',
    image: '/img/phones/iphone-16-pro.svg',
    price: '$999', priceNum: 999, released: 'September 2024',
    keySpecs: ['6.3"', 'A18 Pro', '48MP', '3582mAh'],
    specs: {
      display: { 'Size': '6.3 inches', 'Resolution': '2622 x 1206', 'Type': 'LTPO Super Retina XDR OLED', 'Refresh Rate': '120Hz ProMotion', 'Protection': 'Ceramic Shield' },
      performance: { 'Chipset': 'Apple A18 Pro', 'CPU': '6-core', 'GPU': '6-core Apple GPU', 'RAM': '8 GB', 'Storage': '128GB / 256GB / 512GB / 1TB' },
      camera: { 'Main': '48 MP, f/1.78, OIS', 'Ultrawide': '48 MP, f/2.2', 'Telephoto': '12 MP, f/2.8, 5x optical', 'Front': '12 MP, f/1.9' },
      battery: { 'Capacity': '3582 mAh', 'Wired Charging': '27W', 'Wireless': '25W MagSafe', 'Reverse Wireless': 'No' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.3', 'USB': 'Type-C 3.0', 'NFC': 'Yes' },
      general: { 'OS': 'iOS 18', 'Dimensions': '149.6 x 71.5 x 8.25 mm', 'Weight': '199 g', 'IP Rating': 'IP68', 'Colors': 'Black, White, Natural, Desert Titanium' }
    }
  },
  'google-pixel-9-pro': {
    name: 'Google Pixel 9 Pro', brand: 'Google', brandSlug: 'google', slug: 'pixel-9-pro',
    image: '/img/phones/pixel-9-pro.svg',
    price: '$999', priceNum: 999, released: 'August 2024',
    keySpecs: ['6.3"', 'Tensor G4', '50MP', '4700mAh'],
    specs: {
      display: { 'Size': '6.3 inches', 'Resolution': '2856 x 1280', 'Type': 'LTPO OLED', 'Refresh Rate': '120Hz', 'Protection': 'Gorilla Glass Victus 2' },
      performance: { 'Chipset': 'Google Tensor G4', 'CPU': 'Octa-core', 'GPU': 'Mali-G715', 'RAM': '16 GB', 'Storage': '128GB / 256GB / 512GB / 1TB' },
      camera: { 'Main': '50 MP, f/1.68, OIS', 'Ultrawide': '48 MP, f/1.7', 'Telephoto': '48 MP, f/2.8, 5x optical', 'Front': '42 MP, f/2.2' },
      battery: { 'Capacity': '4700 mAh', 'Wired Charging': '27W', 'Wireless': '21W', 'Reverse Wireless': 'Yes' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.3', 'USB': 'Type-C 3.2', 'NFC': 'Yes' },
      general: { 'OS': 'Android 14', 'Dimensions': '152.8 x 72.0 x 8.5 mm', 'Weight': '199 g', 'IP Rating': 'IP68', 'Colors': 'Obsidian, Porcelain, Hazel, Rose Quartz' }
    }
  },
  'google-pixel-9a': {
    name: 'Google Pixel 9a', brand: 'Google', brandSlug: 'google', slug: 'pixel-9a',
    image: '/img/phones/pixel-9a.svg',
    price: '$499', priceNum: 499, released: 'March 2025',
    keySpecs: ['6.3"', 'Tensor G4', '48MP', '5100mAh'],
    specs: {
      display: { 'Size': '6.3 inches', 'Resolution': '2424 x 1080', 'Type': 'OLED', 'Refresh Rate': '120Hz', 'Protection': 'Gorilla Glass 3' },
      performance: { 'Chipset': 'Google Tensor G4', 'CPU': 'Octa-core', 'GPU': 'Mali-G715', 'RAM': '8 GB', 'Storage': '128GB / 256GB' },
      camera: { 'Main': '48 MP, f/1.7, OIS', 'Ultrawide': '13 MP, f/2.2', 'Front': '13 MP, f/2.2' },
      battery: { 'Capacity': '5100 mAh', 'Wired Charging': '23W', 'Wireless': '7.5W', 'Reverse Wireless': 'No' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.3', 'USB': 'Type-C 2.0', 'NFC': 'Yes' },
      general: { 'OS': 'Android 15', 'Dimensions': '153.4 x 73.3 x 8.9 mm', 'Weight': '186 g', 'IP Rating': 'IP67', 'Colors': 'Obsidian, Porcelain, Iris, Peony' }
    }
  },
  'oneplus-13': {
    name: 'OnePlus 13', brand: 'OnePlus', brandSlug: 'oneplus', slug: 'oneplus-13',
    image: '/img/phones/oneplus-13.svg',
    price: '$899', priceNum: 899, released: 'January 2025',
    keySpecs: ['6.82"', 'SD 8 Elite', '50MP', '6000mAh'],
    specs: {
      display: { 'Size': '6.82 inches', 'Resolution': '3168 x 1440 (QHD+)', 'Type': 'LTPO AMOLED', 'Refresh Rate': '120Hz', 'Protection': 'Ceramic Guard' },
      performance: { 'Chipset': 'Snapdragon 8 Elite', 'CPU': 'Octa-core', 'GPU': 'Adreno 830', 'RAM': '12 / 16 GB', 'Storage': '256GB / 512GB' },
      camera: { 'Main': '50 MP, f/1.6, OIS (LYT-808)', 'Ultrawide': '50 MP, f/2.0', 'Telephoto': '50 MP, f/2.6, 3x optical', 'Front': '32 MP, f/2.4' },
      battery: { 'Capacity': '6000 mAh', 'Wired Charging': '100W SUPERVOOC', 'Wireless': '50W', 'Reverse Wireless': 'Yes, 10W' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.4', 'USB': 'Type-C 3.2', 'NFC': 'Yes' },
      general: { 'OS': 'Android 15, OxygenOS 15', 'Dimensions': '162.9 x 76.5 x 8.5 mm', 'Weight': '210 g', 'IP Rating': 'IP68/IP69', 'Colors': 'Black, Blue, White' }
    }
  },
  'xiaomi-15-ultra': {
    name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', brandSlug: 'xiaomi', slug: '15-ultra',
    image: '/img/phones/xiaomi-15-ultra.svg',
    price: '$999', priceNum: 999, released: 'February 2025',
    keySpecs: ['6.73"', 'SD 8 Elite', '200MP', '5500mAh'],
    specs: {
      display: { 'Size': '6.73 inches', 'Resolution': '3200 x 1440 (QHD+)', 'Type': 'LTPO AMOLED', 'Refresh Rate': '120Hz', 'Protection': 'Star Diamond Shield' },
      performance: { 'Chipset': 'Snapdragon 8 Elite', 'CPU': 'Octa-core', 'GPU': 'Adreno 830', 'RAM': '12 / 16 GB', 'Storage': '256GB / 512GB / 1TB' },
      camera: { 'Main': '50 MP, f/1.63, OIS (LYT-900)', 'Ultrawide': '50 MP, f/2.0', 'Periscope': '200 MP, f/2.6, 5x optical', 'Front': '32 MP, f/2.0' },
      battery: { 'Capacity': '5500 mAh', 'Wired Charging': '90W HyperCharge', 'Wireless': '50W', 'Reverse Wireless': 'Yes, 10W' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 7', 'Bluetooth': '5.4', 'USB': 'Type-C 3.2', 'NFC': 'Yes' },
      general: { 'OS': 'Android 15, HyperOS 2', 'Dimensions': '161.1 x 75.1 x 9.2 mm', 'Weight': '225 g', 'IP Rating': 'IP68', 'Colors': 'Black, White, Silver' }
    }
  },
  'nothing-phone-3': {
    name: 'Nothing Phone (3)', brand: 'Nothing', brandSlug: 'nothing', slug: 'phone-3',
    image: '/img/phones/nothing-3.svg',
    price: '$599', priceNum: 599, released: 'March 2025',
    keySpecs: ['6.5"', 'SD 8s Gen 3', '50MP', '5000mAh'],
    specs: {
      display: { 'Size': '6.5 inches', 'Resolution': '2412 x 1080 (FHD+)', 'Type': 'LTPO AMOLED', 'Refresh Rate': '120Hz', 'Protection': 'Gorilla Glass 5' },
      performance: { 'Chipset': 'Snapdragon 8s Gen 3', 'CPU': 'Octa-core', 'GPU': 'Adreno 735', 'RAM': '8 / 12 GB', 'Storage': '128GB / 256GB' },
      camera: { 'Main': '50 MP, f/1.9, OIS', 'Ultrawide': '50 MP, f/2.2', 'Front': '32 MP, f/2.4' },
      battery: { 'Capacity': '5000 mAh', 'Wired Charging': '45W', 'Wireless': '15W Qi', 'Reverse Wireless': 'No' },
      connectivity: { '5G': 'Yes', 'Wi-Fi': 'Wi-Fi 6E', 'Bluetooth': '5.3', 'USB': 'Type-C 2.0', 'NFC': 'Yes' },
      general: { 'OS': 'Android 15, Nothing OS 3', 'Dimensions': '159.0 x 74.8 x 8.3 mm', 'Weight': '190 g', 'IP Rating': 'IP65', 'Colors': 'Black, White' }
    }
  },
  'samsung-galaxy-m47': {
    name: 'Samsung Galaxy M47', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m47',
    image: '/img/phones/samsung_samsung-galaxy-m47-1.jpg',
    price: '', priceNum: 0, released: '2026, July 04',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '6000mAh'],
    specs: {
      display: { 'Type': 'Super AMOLED, 120Hz, 800 nits (typ), 1400 nits (HBM)', 'Size': '6.7 inches, 110.2 cm2 (~86.8% screen-to-body ratio)', 'Resolution': '1080 x 2340 pixels, 19.5:9 ratio (~385 ppi density)', 'Protection': 'Corning Gorilla Glass Victus+' },
      performance: { 'OS': 'Android 16, up to 6 major Android upgrades, One UI 8.5', 'Chipset': 'Qualcomm SM6475-AB Snapdragon 6 Gen 3 (4 nm)', 'CPU': 'Octa-core (4x2.4 GHz Cortex-A78 & 4x1.8 GHz Cortex-A55)', 'GPU': 'Adreno 710', 'Storage': '128GB 256GB', 'RAM': '6GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, (wide), 1/2.76", 0.64µm, PDAF, OIS 5 MP, f/2.2, (ultrawide), 1/5.0", 1.12µm 2 MP (macro)', 'Features': 'LED flash, panorama, HDR', 'Video': '4K@30fps, 1080p@30fps, 720p@480fps, gyro-EIS', 'Front Camera': '12 MP, f/2.2, (wide), AF' },
      battery: { 'Capacity': '6000 mAh', 'Charging': '45W wired Bypass charging' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct', 'Bluetooth': '5.3, A2DP, LE, ASHA', 'Positioning': 'GPS, GALILEO, GLONASS, BDS, QZSS', 'NFC': 'Yes', 'USB': 'USB Type-C 2.0, OTG' },
      general: { 'Dimensions': '162.4 x 78.2 x 7.8 mm (6.39 x 3.08 x 0.31 in)', 'Weight': '200 g (7.05 oz)', 'Build': 'Glass front (Gorilla Glass Victus+), plastic frame, glass back (Gorilla Glass Victus+)', 'SIM': 'Nano-SIM + Nano-SIM', 'Other': 'IP64 dust tight and water resistant (water splashes) Drop resistant up to 2m', 'Sensors': 'Fingerprint (side-mounted), accelerometer, gyro, compass', 'Colors': 'Blaze Blue, Rogue Red', 'Price': 'About 210 EUR', 'Loudspeaker': 'Yes', '3.5mm jack': 'No' }
    }
  },
  'samsung-galaxy-a27': {
    name: 'Samsung Galaxy A27', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a27',
    image: '/img/phones/samsung_samsung-galaxy-a27.jpg',
    price: '€257.00', priceNum: 257, released: '2026, July 03',
    keySpecs: ['6.7"', 'Snapdragon 6 Gen', '50MP', '5000mAh'],
    specs: {
      display: { 'Type': 'Super AMOLED, 120Hz', 'Size': '6.7 inches, 110.2 cm2 (~86.8% screen-to-body ratio)', 'Resolution': '1080 x 2340 pixels, 19.5:9 ratio (~385 ppi density)', 'Protection': 'Corning Gorilla Glass Victus+, Mohs level 5' },
      performance: { 'OS': 'Android 16, up to 6 major Android upgrades, One UI 8.5', 'Chipset': 'Qualcomm SM6475-AB Snapdragon 6 Gen 3 (4 nm)', 'CPU': 'Octa-core (4x2.4 GHz Cortex-A78 & 4x1.8 GHz Cortex-A55)', 'GPU': 'Adreno 710', 'Storage': '128GB 128GB 256GB', 'RAM': '6GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, (wide), 1/2.76", 0.64µm, PDAF, OIS 5 MP, f/2.2, (ultrawide), 1/5.0", 1.12µm 2 MP (macro)', 'Features': 'LED flash, panorama, HDR', 'Video': '4K@30fps, 1080p@30fps, 720p@480fps, gyro-EIS', 'Front Camera': '12 MP, f/2.2, (wide)' },
      battery: { 'Capacity': '5000 mAh', 'Charging': '25W wired, 45% in 30 min' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct', 'Bluetooth': '5.1, A2DP, LE, ASHA', 'Positioning': 'GPS, GALILEO, GLONASS, BDS, QZSS', 'NFC': 'Yes (market/region dependent)', 'USB': 'USB Type-C 2.0, OTG' },
      general: { 'Dimensions': '162.4 x 78.2 x 7.8 mm (6.39 x 3.08 x 0.31 in)', 'Weight': '200 g (7.05 oz)', 'Build': 'Glass front (Gorilla Glass Victus+), plastic frame, glass back (Gorilla Glass Victus+)', 'SIM': '· Nano-SIM + eSIM· Nano-SIM + Nano-SIM', 'Other': 'IP64 dust tight and water resistant (water splashes)', 'Sensors': 'Fingerprint (side-mounted), accelerometer, gyro, compass', 'Colors': 'Black, Blue, Light Green, Light Pink', 'Price': '₹ 31,999 / £ 319.00 / € 257.00', 'Loudspeaker': 'Yes', '3.5mm jack': 'No' }
    }
  },
  'samsung-galaxy-a57': {
    name: 'Samsung Galaxy A57', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a57',
    image: '/img/phones/samsung_samsung-galaxy-a57.jpg',
    price: '$429.99', priceNum: 429.99, released: '2026, April 9',
    keySpecs: ['6.7"', 'Exynos 1680', '50MP', '5000mAh'],
    specs: {
      display: { 'Type': 'Super AMOLED+, 120Hz, HDR10+, 1200 nits (HBM), 1900 nits (peak)', 'Size': '6.7 inches, 110.2 cm2 (~88.8% screen-to-body ratio)', 'Resolution': '1080 x 2340 pixels, 19.5:9 ratio (~385 ppi density)', 'Protection': 'Corning Gorilla Glass Victus+, Mohs level 5' },
      performance: { 'OS': 'Android 16, up to 6 major Android upgrades, One UI 8.5', 'Chipset': 'Exynos 1680 (4 nm)', 'CPU': 'Octa-core (1x2.9 GHz Cortex-720 & 4x2.6 GHz Cortex-720 & 3x1.95 GHz Cortex-520)', 'GPU': 'Xclipse 550', 'Storage': '128GB 256GB 256GB 512GB', 'RAM': '8GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, (wide), 1/1.56", 1.0µm, PDAF, OIS 12 MP, f/2.2, 13mm (ultrawide), 1/3.06", 1.12µm 5 MP, f/2.4, (macro)', 'Features': 'Best Face, LED flash, panorama, HDR', 'Video': '4K@30fps, 1080p@30/60fps, gyro-EIS', 'Front Camera': '12 MP, f/2.2, (wide), 1/3.2", 1.12µm' },
      battery: { 'Capacity': '5000 mAh', 'Charging': '45W wired' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band or tri-band, Wi-Fi Direct', 'Bluetooth': '6.0, A2DP, LE', 'Positioning': 'GPS, GALILEO, GLONASS, BDS, QZSS', 'NFC': 'Yes (market/region dependent)', 'USB': 'USB Type-C 2.0, OTG' },
      general: { 'Dimensions': '161.5 x 76.8 x 6.9 mm (6.36 x 3.02 x 0.27 in)', 'Weight': '179 g (6.31 oz)', 'Build': 'Glass front (Gorilla Glass Victus+), aluminum frame, glass back (Gorilla Glass Victus+)', 'SIM': '· Nano-SIM + eSIM· Nano-SIM + Nano-SIM + eSIM + eSIM (max 2 at a time)', 'Other': 'IP68 dust tight and water resistant (immersible up to 1.5m for 30 min)', 'Sensors': 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass', 'Colors': 'Navy, Gray, Icyblue, Lilac', 'Price': '₹ 47,990 / $ 429.99 / £ 284.99 / € 318.98', 'Loudspeaker': 'Yes, with stereo speakers', '3.5mm jack': 'No' }
    }
  },
  'samsung-galaxy-a37': {
    name: 'Samsung Galaxy A37', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a37',
    image: '/img/phones/samsung_samsung-galaxy-a37.jpg',
    price: '$329.50', priceNum: 329.5, released: '2026, April 9',
    keySpecs: ['6.7"', 'Exynos 1480', '50MP', '5000mAh'],
    specs: {
      display: { 'Type': 'Super AMOLED, 120Hz, 1200 nits (HBM), 1900 nits (peak)', 'Size': '6.7 inches, 110.2 cm2 (~86.5% screen-to-body ratio)', 'Resolution': '1080 x 2340 pixels, 19.5:9 ratio (~385 ppi density)', 'Protection': 'Corning Gorilla Glass Victus+, Mohs level 5' },
      performance: { 'OS': 'Android 16, up to 6 major Android upgrades, One UI 8.5', 'Chipset': 'Exynos 1480 (4 nm)', 'CPU': 'Octa-core (4x2.75 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)', 'GPU': 'Xclipse 530', 'Storage': '128GB 128GB 256GB 256GB', 'RAM': '6GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, (wide), 1/1.56", 1.0µm, PDAF, OIS 8 MP, f/2.2, 16mm (ultrawide), 1/4.0", 1.12µm 5 MP, f/2.4, (macro)', 'Features': 'LED flash, panorama, HDR', 'Video': '4K@30fps, 1080p@30/60fps, gyro-EIS', 'Front Camera': '12 MP, f/2.2, (wide), 1/3.2", 1.12µm' },
      battery: { 'Capacity': '5000 mAh', 'Charging': '45W wired' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct', 'Bluetooth': '5.4, A2DP, LE', 'Positioning': 'GPS, GALILEO, GLONASS, BDS, QZSS', 'NFC': 'Yes (market/region dependent)', 'USB': 'USB Type-C 2.0, OTG' },
      general: { 'Dimensions': '162.9 x 78.2 x 7.4 mm (6.41 x 3.08 x 0.29 in)', 'Weight': '196 g (6.91 oz)', 'Build': 'Glass front (Gorilla Glass Victus+), plastic frame, glass back (Gorilla Glass Victus+)', 'SIM': '· Nano-SIM + eSIM· Nano-SIM + Nano-SIM + eSIM + eSIM (max 2 at a time)', 'Other': 'IP68 dust tight and water resistant (immersible up to 1.5m for 30 min)', 'Sensors': 'Fingerprint (under display, optical), accelerometer, gyro, compass', 'Colors': 'Graygreen, Charkoal, White, Light Violet', 'Price': '₹ 36,499 / $ 329.50 / £ 261.69 / € 251.04', 'Loudspeaker': 'Yes, with stereo speakers', '3.5mm jack': 'No' }
    }
  },
  'samsung-galaxy-m17e': {
    name: 'Samsung Galaxy M17e', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-m17e',
    image: '/img/phones/samsung_samsung-galaxy-m17e.jpg',
    price: '', priceNum: 0, released: '2026, March 17',
    keySpecs: ['6.7"', '6300', '50MP', '6000mAh'],
    specs: {
      display: { 'Type': 'PLS LCD, 120Hz, 650 nits (typ), 800 nits (HBM)', 'Size': '6.7 inches, 108.4 cm2 (~83.6% screen-to-body ratio)', 'Resolution': '720 x 1600 pixels, 20:9 ratio (~262 ppi density)' },
      performance: { 'OS': 'Android 16, up to 6 major Android upgrades, One UI 8', 'Chipset': 'Mediatek Dimensity 6300 (6 nm)', 'CPU': 'Octa-core (2x2.4 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)', 'GPU': 'Mali-G57 MC2', 'Storage': '128GB 128GB', 'RAM': '4GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, (wide), PDAF Auxiliary lens', 'Features': 'LED flash', 'Video': '1080p@30/60fps', 'Front Camera': '8 MP, f/2.0, 26mm (wide), 1/4.0", 1.12µm' },
      battery: { 'Capacity': 'Li-Ion 6000 mAh', 'Charging': '25W wired' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct', 'Bluetooth': '5.3, A2DP, LE', 'Positioning': 'GPS, GALILEO, GLONASS, BDS, QZSS', 'NFC': 'No', 'USB': 'USB Type-C 2.0' },
      general: { 'Dimensions': '167.4 x 77.4 x 8.2 mm (6.59 x 3.05 x 0.32 in)', 'Weight': '199 g (7.02 oz)', 'Build': 'Glass front, plastic back, plastic frame', 'SIM': 'Nano-SIM + Nano-SIM', 'Other': 'IP54 dust protected and water resistant (water splashes)', 'Sensors': 'Fingerprint (side-mounted), accelerometer, gyro, proximity, compass', 'Colors': 'Blitz Blue, Vibe Violet', 'Price': '₹ 12,999', 'Loudspeaker': 'Yes', '3.5mm jack': 'Yes' }
    }
  },
  'samsung-galaxy-s26-ultra': {
    name: 'Samsung Galaxy S26 Ultra', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s26-ultra',
    image: '/img/phones/samsung_samsung-galaxy-s26-ultra-new.jpg',
    price: '$1,030.00', priceNum: 1030, released: '2026, March 06',
    keySpecs: ['6.9"', 'Snapdragon 8 Elite', '200MP', '5000mAh'],
    specs: {
      display: { 'Type': 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)', 'Size': '6.9 inches, 115.9 cm2 (~90.7% screen-to-body ratio)', 'Resolution': '1440 x 3120 pixels, 19.5:9 ratio (~500 ppi density)', 'Protection': 'Corning Gorilla Armor 2, Mohs level 6' },
      performance: { 'OS': 'Android 16, up to 7 major Android upgrades, One UI 8.5', 'Chipset': 'Qualcomm SM8850-1-AD Snapdragon 8 Elite Gen 5 (3 nm)', 'CPU': 'Octa-core (2x4.74 GHz Oryon V3 Phoenix L + 6x3.62 GHz Oryon V3 Phoenix M)', 'GPU': 'Adreno 840 (1.3GHz)', 'Storage': '256GB 512GB 1TB', 'RAM': '12GB' },
      camera: { 'Main Camera': '200 MP, f/1.4, 23mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, OIS 10 MP, f/2.4, 67mm (telephoto), 1/3.94", 1.0µm, PDAF, OIS, 3x optical zoom 50 MP, f/2.9, 111mm (periscope telephoto), 1/2.52", 0.7µm, PDAF, OIS, 5x optical zoom 50 MP, f/1.9, 120˚ (ultrawide), 1/2.5", 0.7µm, dual pixel PDAF, Super Steady video', 'Features': 'Laser AF, Best Face, Horizon Lock, LED flash, auto-HDR, panorama', 'Video': '8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps, 10-bit HDR, HDR10+, stereo sound rec., gyro-EIS', 'Front Camera': '12 MP, f/2.2, 23mm (wide), 1/3.2", 1.12µm, dual pixel PDAF' },
      battery: { 'Capacity': 'Li-Ion 5000 mAh', 'Charging': '60W wired, PD3.0, 75% in 30 min 25W wireless (Qi2.2) 4.5W reverse wireless' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct', 'Bluetooth': '6.0, A2DP, LE', 'Positioning': 'GPS, GLONASS, BDS, GALILEO, QZSS', 'NFC': 'Yes', 'USB': 'USB Type-C 3.2, DisplayPort 1.2, OTG' },
      general: { 'Dimensions': '163.6 x 78.1 x 7.9 mm (6.44 x 3.07 x 0.31 in)', 'Weight': '214 g (7.55 oz)', 'Build': 'Glass front (Corning Gorilla Armor 2), glass back (Gorilla Glass Victus 2), aluminum frame', 'SIM': '· Nano-SIM + Nano-SIM + eSIM + eSIM (max 2 at a time) - INT· Nano-SIM + eSIM + eSIM (max 2 at a time) - USA· Nano-SIM + Nano-SIM - CN', 'Other': 'IP68 dust tight and water resistant (immersible up to 1.5m for 30 min) Stylus Armor aluminum 2 frame', 'Sensors': 'Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer', 'Colors': 'Cobalt Violet, Sky Blue, Black, White, Silver Shadow, Pink Gold', 'Price': '₹ 120,699 / $ 1,030.00 / £ 799.00 / € 929.00', 'Loudspeaker': 'Yes, with stereo speakers', '3.5mm jack': 'No' }
    }
  },
  'samsung-galaxy-s26': {
    name: 'Samsung Galaxy S26', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-s26',
    image: '/img/phones/samsung_samsung-galaxy-s26.jpg',
    price: '$674.92', priceNum: 674.92, released: '2026, March 06',
    keySpecs: ['6.3"', 'Snapdragon 8 Elite', '50MP', '4300mAh'],
    specs: {
      display: { 'Type': 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)', 'Size': '6.3 inches, 96.5 cm2 (~90.0% screen-to-body ratio)', 'Resolution': '1080 x 2340 pixels, 19.5:9 ratio (~411 ppi density)', 'Protection': 'Corning Gorilla Glass Victus 2, Mohs level 5' },
      performance: { 'OS': 'Android 16, up to 7 major Android upgrades, One UI 8.5', 'Chipset': 'Qualcomm SM8850-1-AD Snapdragon 8 Elite Gen 5 (3 nm) - US/CNExynos 2600 (2 nm) - ROW', 'CPU': 'Octa-core (2x4.74 GHz Oryon V3 Phoenix L + 6x3.62 GHz Oryon V3 Phoenix M) - US/CN10-core (1x3.80GHz C1-Ultra & 3x3.25GHz C1-Pro & 6x2.75GHz C1-Pro) - ROW', 'GPU': 'Adreno 840 (1.3GHz) - US/CNXclipse 960 - ROW', 'Storage': '128GB 256GB 512GB', 'RAM': '12GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, 24mm (wide), 1/1.56", 1.0µm, dual pixel PDAF, OIS 10 MP, f/2.4, 67mm (telephoto), 1/3.94", 1.0µm, PDAF, OIS, 3x optical zoom 12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55" 1.4µm, Super Steady video', 'Features': 'Best Face, Horizon Lock, LED flash, auto-HDR, panorama', 'Video': '8K@24/30fps, 4K@30/60fps, 1080p@30/60/120/240fps, 10-bit HDR, HDR10+, stereo sound rec., gyro-EIS', 'Front Camera': '12 MP, f/2.2, 23mm (wide), 1/3.2", 1.12µm, dual pixel PDAF' },
      battery: { 'Capacity': 'Li-Ion 4300 mAh', 'Charging': '25W wired, PD3.0, 55% in 30 min 15W wireless (Qi2 Ready) 4.5W reverse wireless' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct', 'Bluetooth': '5.4, A2DP, LE', 'Positioning': 'GPS, GLONASS, BDS, GALILEO, QZSS', 'NFC': 'Yes', 'USB': 'USB Type-C 3.2, DisplayPort 1.2, OTG' },
      general: { 'Dimensions': '149.6 x 71.7 x 7.2 mm (5.89 x 2.82 x 0.28 in)', 'Weight': '167 g (5.89 oz)', 'Build': 'Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass Victus 2), aluminum frame', 'SIM': '· Nano-SIM + Nano-SIM + eSIM + eSIM (max 2 at a time) - INT· Nano-SIM + eSIM + eSIM (max 2 at a time) - USA· Nano-SIM + Nano-SIM - CN', 'Other': 'IP68 dust tight and water resistant (immersible up to 1.5m for 30 min) Armor aluminum 2 frame', 'Sensors': 'Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer', 'Colors': 'Cobalt Violet, Sky Blue, Black, White, Silver Shadow, Pink Gold', 'Price': '₹ 79,999 / $ 674.92 / £ 620.00 / € 634.90', 'Loudspeaker': 'Yes, with stereo speakers', '3.5mm jack': 'No' }
    }
  },
  'samsung-galaxy-f70e': {
    name: 'Samsung Galaxy F70e', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-f70e',
    image: '/img/phones/samsung_samsung-galaxy-f70e.jpg',
    price: '', priceNum: 0, released: '2026, February 17',
    keySpecs: ['6.7"', '6300', '50MP', '6000mAh'],
    specs: {
      display: { 'Type': 'PLS LCD, 120Hz, 650 nits (typ), 800 nits (HBM)', 'Size': '6.7 inches, 108.4 cm2 (~83.6% screen-to-body ratio)', 'Resolution': '720 x 1600 pixels, 20:9 ratio (~262 ppi density)' },
      performance: { 'OS': 'Android 16, up to 6 major Android upgrades, One UI 8', 'Chipset': 'Mediatek Dimensity 6300 (6 nm)', 'CPU': 'Octa-core (2x2.4 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)', 'GPU': 'Mali-G57 MC2', 'Storage': '128GB 128GB', 'RAM': '4GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, (wide), PDAF Auxiliary lens', 'Features': 'LED flash', 'Video': '1080p@30/60fps', 'Front Camera': '8 MP, f/2.0, 26mm (wide), 1/4.0", 1.12µm' },
      battery: { 'Capacity': 'Li-Ion 6000 mAh', 'Charging': '25W wired' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct', 'Bluetooth': '5.3, A2DP, LE', 'Positioning': 'GPS, GALILEO, GLONASS, BDS, QZSS', 'NFC': 'No', 'USB': 'USB Type-C 2.0, OTG' },
      general: { 'Dimensions': '167.4 x 77.4 x 8.2 mm (6.59 x 3.05 x 0.32 in)', 'Weight': '199 g (7.02 oz)', 'Build': 'Glass front, plastic frame, silicone polymer back (eco leather)', 'SIM': 'Nano-SIM + Nano-SIM', 'Other': 'IP54 dust protected and water resistant (water splashes)', 'Sensors': 'Fingerprint (side-mounted), accelerometer, gyro, proximity, compass', 'Colors': 'Limelight Green, Spotlight Blue', 'Price': '₹ 13,368', 'Loudspeaker': 'Yes', '3.5mm jack': 'Yes' }
    }
  },
  'samsung-galaxy-a07': {
    name: 'Samsung Galaxy A07', brand: 'Samsung', brandSlug: 'samsung', slug: 'galaxy-a07',
    image: '/img/phones/samsung_samsung-galaxy-a07-5g.jpg',
    price: '€213.68', priceNum: 213.68, released: '2026, January 13',
    keySpecs: ['6.7"', '6300', '50MP', '6000mAh'],
    specs: {
      display: { 'Type': 'PLS LCD, 120Hz, 650 nits (typ), 800 nits (HBM)', 'Size': '6.7 inches, 108.4 cm2 (~83.6% screen-to-body ratio)', 'Resolution': '720 x 1600 pixels, 20:9 ratio (~262 ppi density)' },
      performance: { 'OS': 'Android 16, up to 6 major Android upgrades, One UI 8', 'Chipset': 'Mediatek Dimensity 6300 (6 nm)', 'CPU': 'Octa-core (2x2.4 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)', 'GPU': 'Mali-G57 MC2', 'Storage': '64GB 128GB 128GB', 'RAM': '4GB' },
      camera: { 'Main Camera': '50 MP, f/1.8, (wide), PDAF Auxiliary lens', 'Features': 'LED flash', 'Video': '1080p@30/60fps', 'Front Camera': '8 MP, f/2.0, 26mm (wide), 1/4.0", 1.12µm' },
      battery: { 'Capacity': 'Li-Ion 6000 mAh', 'Charging': '25W wired' },
      connectivity: { 'Wi-Fi': 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct', 'Bluetooth': '5.3, A2DP, LE', 'Positioning': 'GPS, GALILEO, GLONASS, BDS, QZSS', 'NFC': 'No', 'USB': 'USB Type-C 2.0' },
      general: { 'Dimensions': '167.4 x 77.4 x 8.2 mm (6.59 x 3.05 x 0.32 in)', 'Weight': '199 g (7.02 oz)', 'Build': 'Glass front, plastic back, plastic frame', 'SIM': 'Nano-SIM + Nano-SIM', 'Other': 'IP54 dust protected and water resistant (water splashes)', 'Sensors': 'Fingerprint (side-mounted), accelerometer, gyro, proximity, compass', 'Colors': 'Black, Light Violet', 'Price': '₹ 13,770 / € 213.68', 'Loudspeaker': 'Yes', '3.5mm jack': 'Yes' }
    }
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
