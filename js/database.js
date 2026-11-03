// ==================== 集中式商品数据库 (Database) ====================
const productDatabase = {
  "wigs-1": {
  id: "wigs-1",
  category: "wig",
  subCategory: "100%", // 子类目: 100% 系列
  name: '13x4 Deep Wave And Natural Black Wigs Lace Front Jerry Curly Wig Brazilian Pre Plucked Closure Wigs For Women ,For Daily Wear',
  description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "250% Density", // 假发专属属性: 密度
  laceArea: "13x4 HD Lace Front", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p1/p1.jpg",
    "../images/wig-p1/p2.jpg",
    "../images/wig-p1/p3.jpg",
    "../images/wig-p1/p4.jpg",
    "../images/wig-p1/p5.jpg",
    "../images/wig-p1/p6.jpg",
    "../images/wig-p1/p7.jpg",
    "../images/wig-p1/p8.jpg",
    "../images/wig-p1/p9.jpg"
  ],
  // 每个尺寸拥有独立的现价、原价、以及随尺寸递增的重量
  sizes: [
    { name: "8 Inch", price: 119.43, originalPrice: 183.91, weight: "0.18 kg" },
    { name: "10 Inch", price: 120.86, originalPrice: 216.58, weight: "0.20 kg" },
    { name: "12 Inch", price: 127.29, originalPrice: 249.22, weight: "0.21 kg" },
    { name: "14 Inch", price: 134.43, originalPrice: 227.59, weight: "0.22 kg" },
    { name: "16 Inch", price: 142.29, originalPrice: 240.09, weight: "0.24 kg" },
    { name: "18 Inch", price: 155.14, originalPrice: 265.16, weight: "0.26 kg" },
    { name: "20 Inch", price: 168.71, originalPrice: 312.44, weight: "0.27 kg" },
    { name: "22 Inch", price: 185.86, originalPrice: 361.64, weight: "0.30 kg" },
    { name: "24 Inch", price: 205.14, originalPrice: 346.41, weight: "0.32 kg" },
    { name: "26 Inch", price: 212.29, originalPrice: 386.21, weight: "0.34 kg" },
    { name: "28 Inch", price: 230.14, originalPrice: 456.25, weight: "0.36 kg" },
    { name: "30 Inch", price: 246.57, originalPrice: 482.00, weight: "0.38 kg" },
    { name: "32 Inch", price: 273.71, originalPrice: 462.07, weight: "0.41 kg" },
    { name: "34 Inch", price: 302.29, originalPrice: 455.06, weight: "0.44 kg" },
    { name: "36 Inch", price: 330.86, originalPrice: 592.30, weight: "0.46 kg" },
    { name: "38 Inch", price: 359.43, originalPrice: 653.75, weight: "0.49 kg" },
    { name: "40 Inch", price: 388.00, originalPrice: 654.20, weight: "0.51 kg" }
  ]
},
"wigs-2": {
  id: "wigs-2",
  category: "wig",
  subCategory: "50%", // 子类目: 50% 系列
  name: '18 20 22 Inch Body Wave Real Human Hair Bundles - 3 Bundles Double Drawn Ultra Thin Weft, Cuticle Aligned Long-Lasting Professional Sew In Extensions, Reusable And Dyeable',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and natural",
  density: "Bundle-FTBW", // 假发专属属性: 密度
  laceArea: "1/3/4", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p2/p1.jpg",
    "../images/wig-p2/p2.jpg",
    "../images/wig-p2/p3.jpg",
    "../images/wig-p2/p4.jpg",
    "../images/wig-p2/p5.jpg",
    "../images/wig-p2/p6.jpg",
    "../images/wig-p2/p7.jpg",
    "../images/wig-p2/p8.jpg",
    "../images/wig-p2/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 13.50, originalPrice: 24.81, weight: "0.11 kg" },
    { name: "10 Inch", price: 13.50, originalPrice: 26.09, weight: "0.11 kg" },
    { name: "12 Inch", price: 13.50, originalPrice: 23.31, weight: "0.11 kg" },
    { name: "14 Inch", price: 18.80, originalPrice: 36.37, weight: "0.11 kg" },
    { name: "16 Inch", price: 19.05, originalPrice: 32.67, weight: "0.11 kg" },
    { name: "18 Inch", price: 20.93, originalPrice: 32.61, weight: "0.11 kg" },
    { name: "20 Inch", price: 21.17, originalPrice: 40.29, weight: "0.11 kg" },
    { name: "22 Inch", price: 21.47, originalPrice: 42.19, weight: "0.11 kg" },
    { name: "24 Inch", price: 23.33, originalPrice: 42.92, weight: "0.11 kg" },
    { name: "26 Inch", price: 25.25, originalPrice: 44.77, weight: "0.11 kg" },
    { name: "28 Inch", price: 38.85, originalPrice: 60.11, weight: "0.11 kg" },
    { name: "30 Inch", price: 38.19, originalPrice: 73.18, weight: "0.11 kg" },
    { name: "32 Inch", price: 50.40, originalPrice: 88.44, weight: "0.11 kg" },
    { name: "34 Inch", price: 37.13, originalPrice: 57.43, weight: "0.11 kg" },
    { name: "36 Inch", price: 38.25, originalPrice: 73.51, weight: "0.11 kg" },
    { name: "38 Inch", price: 46.92, originalPrice: 79.21, weight: "0.11 kg" },
    { name: "40 Inch", price: 55.70, originalPrice: 109.04, weight: "0.11 kg" },
    { name: "42 Inch", price: 57.29, originalPrice: 91.25, weight: "0.11 kg" },
    { name: "44 Inch", price: 61.70, originalPrice: 116.56, weight: "0.11 kg" },
    { name: "10 12 14", price: 37.79, originalPrice: 74.00, weight: "0.33 kg" },
    { name: "10 12 14 16", price: 56.82, originalPrice: 111.42, weight: "0.44 kg" },
    { name: "12 14 16", price: 43.44, originalPrice: 78.78, weight: "0.33 kg" },
    { name: "12 14 16 18", price: 61.41, originalPrice: 100.25, weight: "0.44 kg" },
    { name: "14 16 18", price: 49.79, originalPrice: 82.14, weight: "0.33 kg" },
    { name: "14 16 18 20", price: 65.93, originalPrice: 105.85, weight: "0.44 kg" },
    { name: "16 18 20", price: 54.75, originalPrice: 96.45, weight: "0.33 kg" },
    { name: "16 18 20 22", price: 71.48, originalPrice: 128.85, weight: "0.44 kg" },
    { name: "18 20 22", price: 60.02, originalPrice: 96.15, weight: "0.33 kg" },
    { name: "18 20 22 24", price: 77.43, originalPrice: 154.77, weight: "0.44 kg" },
    { name: "20 22 24", price: 63.62, originalPrice: 126.93, weight: "0.33 kg" },
    { name: "20 22 24 26", price: 83.19, originalPrice: 158.95, weight: "0.44 kg" },
    { name: "22 24 26", price: 70.20, originalPrice: 140.09, weight: "0.33 kg" },
    { name: "22 24 26 28", price: 90.75, originalPrice: 151.76, weight: "0.44 kg" },
    { name: "24 26 28", price: 75.00, originalPrice: 149.38, weight: "0.33 kg" },
    { name: "24 26 28 30", price: 97.50, originalPrice: 167.78, weight: "0.44 kg" },
    { name: "26 28 30", price: 80.00, originalPrice: 129.27, weight: "0.33 kg" },
    { name: "26 28 30 32", price: 105.86, originalPrice: 198.10, weight: "0.44 kg" },
    { name: "28 30 32", price: 84.44, originalPrice: 132.06, weight: "0.33 kg" },
    { name: "28 30 32 34", price: 111.44, originalPrice: 217.13, weight: "0.44 kg" },
    { name: "30 32 34", price: 88.50, originalPrice: 135.22, weight: "0.33 kg" },
    { name: "30 32 34 36", price: 119.91, originalPrice: 195.99, weight: "0.44 kg" },
    { name: "32 34 36", price: 120.53, originalPrice: 240.76, weight: "0.33 kg" },
    { name: "32 34 36 38", price: 130.17, originalPrice: 235.22, weight: "0.44 kg" },
    { name: "34 36 38", price: 128.06, originalPrice: 242.20, weight: "0.33 kg" },
    { name: "34 36 38 40", price: 141.75, originalPrice: 215.88, weight: "0.44 kg" },
    { name: "36 38 40", price: 118.97, originalPrice: 179.77, weight: "0.33 kg" },
    { name: "36 38 40 42", price: 152.25, originalPrice: 232.88, weight: "0.44 kg" },
    { name: "38 40 42", price: 123.38, originalPrice: 229.83, weight: "0.33 kg" },
    { name: "38 40 42 44", price: 162.86, originalPrice: 311.05, weight: "0.44 kg" },
    { name: "40 42 44", price: 150.66, originalPrice: 245.30, weight: "0.33 kg" },
    { name: "20 20 20", price: 62.10, originalPrice: 117.32, weight: "0.33 kg" },
    { name: "20 20 20 20", price: 81.21, originalPrice: 153.08, weight: "0.44 kg" },
    { name: "22 22 22", price: 66.63, originalPrice: 104.61, weight: "0.33 kg" },
    { name: "22 22 22 22", price: 88.65, originalPrice: 148.70, weight: "0.44 kg" }
  ]
},
"wigs-3": {
  id: "wigs-3",
  category: "wig",
  subCategory: "50%", // 子类目: 50% 系列
  name: 'Unprocessed Brazilian Virgin Hair 4 Bundles Straight Human Hair 16 18 20 22 Inch - Double Weft Thick Weave Bundle Extensions For Women Natural Black Color',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and natural",
  density: "Bundle-FTBW", // 假发专属属性: 密度
  laceArea: "1/3/4", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p3/p1.jpg",
    "../images/wig-p3/p2.jpg",
    "../images/wig-p3/p3.jpg",
    "../images/wig-p3/p4.jpg",
    "../images/wig-p3/p5.jpg",
    "../images/wig-p3/p6.jpg",
    "../images/wig-p3/p7.jpg",
    "../images/wig-p3/p8.jpg",
    "../images/wig-p3/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 13.50, originalPrice: 22.90, weight: "0.11 kg" },
    { name: "10 Inch", price: 13.50, originalPrice: 26.42, weight: "0.11 kg" },
    { name: "12 Inch", price: 13.50, originalPrice: 24.97, weight: "0.11 kg" },
    { name: "14 Inch", price: 15.75, originalPrice: 30.94, weight: "0.11 kg" },
    { name: "16 Inch", price: 14.85, originalPrice: 27.30, weight: "0.11 kg" },
    { name: "18 Inch", price: 15.53, originalPrice: 28.01, weight: "0.11 kg" },
    { name: "20 Inch", price: 17.55, originalPrice: 27.09, weight: "0.11 kg" },
    { name: "22 Inch", price: 19.70, originalPrice: 37.76, weight: "0.11 kg" },
    { name: "24 Inch", price: 21.95, originalPrice: 35.24, weight: "0.11 kg" },
    { name: "26 Inch", price: 24.30, originalPrice: 36.68, weight: "0.11 kg" },
    { name: "28 Inch", price: 28.70, originalPrice: 54.17, weight: "0.11 kg" },
    { name: "30 Inch", price: 31.05, originalPrice: 49.97, weight: "0.11 kg" },
    { name: "32 Inch", price: 36.00, originalPrice: 61.34, weight: "0.11 kg" },
    { name: "34 Inch", price: 37.13, originalPrice: 65.02, weight: "0.11 kg" },
    { name: "36 Inch", price: 38.25, originalPrice: 66.52, weight: "0.11 kg" },
    { name: "38 Inch", price: 46.92, originalPrice: 93.54, weight: "0.11 kg" },
    { name: "40 Inch", price: 55.70, originalPrice: 96.51, weight: "0.11 kg" },
    { name: "42 Inch", price: 57.29, originalPrice: 87.48, weight: "0.11 kg" },
    { name: "44 Inch", price: 61.70, originalPrice: 113.96, weight: "0.11 kg" },
    { name: "10 12 14", price: 37.80, originalPrice: 65.03, weight: "0.33 kg" },
    { name: "10 12 14 16", price: 56.82, originalPrice: 95.03, weight: "0.44 kg" },
    { name: "12 14 16", price: 40.83, originalPrice: 80.87, weight: "0.33 kg" },
    { name: "12 14 16 18", price: 61.41, originalPrice: 119.60, weight: "0.44 kg" },
    { name: "14 16 18", price: 49.79, originalPrice: 97.40, weight: "0.33 kg" },
    { name: "14 16 18 20", price: 65.93, originalPrice: 129.16, weight: "0.44 kg" },
    { name: "16 18 20", price: 54.75, originalPrice: 94.95, weight: "0.33 kg" },
    { name: "16 18 20 22", price: 71.82, originalPrice: 123.74, weight: "0.44 kg" },
    { name: "18 20 22", price: 59.24, originalPrice: 112.74, weight: "0.33 kg" },
    { name: "18 20 22 24", price: 77.55, originalPrice: 138.13, weight: "0.44 kg" },
    { name: "20 22 24", price: 63.62, originalPrice: 118.25, weight: "0.33 kg" },
    { name: "20 22 24 26", price: 82.85, originalPrice: 146.83, weight: "0.44 kg" },
    { name: "22 24 26", price: 68.25, originalPrice: 117.61, weight: "0.33 kg" },
    { name: "22 24 26 28", price: 90.81, originalPrice: 170.56, weight: "0.44 kg" },
    { name: "24 26 28", price: 74.45, originalPrice: 133.77, weight: "0.33 kg" },
    { name: "24 26 28 30", price: 98.36, originalPrice: 183.19, weight: "0.44 kg" },
    { name: "26 28 30", price: 80.66, originalPrice: 144.94, weight: "0.33 kg" },
    { name: "26 28 30 32", price: 105.47, originalPrice: 194.39, weight: "0.44 kg" },
    { name: "28 30 32", price: 84.89, originalPrice: 152.83, weight: "0.33 kg" },
    { name: "28 30 32 34", price: 112.17, originalPrice: 188.65, weight: "0.44 kg" },
    { name: "30 32 34", price: 88.83, originalPrice: 133.52, weight: "0.33 kg" },
    { name: "30 32 34 36", price: 121.26, originalPrice: 218.24, weight: "0.44 kg" },
    { name: "32 34 36", price: 101.52, originalPrice: 179.81, weight: "0.33 kg" },
    { name: "32 34 36 38", price: 129.20, originalPrice: 218.11, weight: "0.44 kg" },
    { name: "34 36 38", price: 110.27, originalPrice: 180.36, weight: "0.33 kg" },
    { name: "34 36 38 40", price: 141.75, originalPrice: 273.60, weight: "0.44 kg" },
    { name: "36 38 40", price: 114.21, originalPrice: 200.09, weight: "0.33 kg" },
    { name: "36 38 40 42", price: 151.88, originalPrice: 262.81, weight: "0.44 kg" },
    { name: "38 40 42", price: 123.38, originalPrice: 235.95, weight: "0.33 kg" },
    { name: "38 40 42 44", price: 159.00, originalPrice: 290.19, weight: "0.44 kg" },
    { name: "40 42 44", price: 127.79, originalPrice: 210.17, weight: "0.33 kg" },
    { name: "20 20 20", price: 62.10, originalPrice: 111.64, weight: "0.33 kg" },
    { name: "20 20 20 20", price: 81.21, originalPrice: 162.12, weight: "0.44 kg" },
    { name: "22 22 22", price: 66.63, originalPrice: 102.25, weight: "0.33 kg" },
    { name: "22 22 22 22", price: 88.65, originalPrice: 138.45, weight: "0.44 kg" }
  ]
},
"wigs-4": {
  id: "wigs-4",
  category: "wig",
  subCategory: "50%", // 子类目: 50% 系列
  name: 'Glueless Bob Wig Human Hair Pre Plucked Pre Cut 6x4/13X4 HD Lace Closure Wigs Human Hair 180% Density Wear and Go Short Straight Bob Wigs for Women 12 Inch',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "180% Density", // 假发专属属性: 密度
  laceArea: "13x4/6X4 HD Lace", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p4/p1.jpg",
    "../images/wig-p4/p2.jpg",
    "../images/wig-p4/p3.jpg",
    "../images/wig-p4/p4.jpg",
    "../images/wig-p4/p5.jpg",
    "../images/wig-p4/p6.jpg",
    "../images/wig-p4/p7.jpg",
    "../images/wig-p4/p8.jpg",
    "../images/wig-p4/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 30.95, originalPrice: 50.92, weight: "0.18 kg" },
    { name: "10 Inch", price: 30.84, originalPrice: 49.37, weight: "0.18 kg" },
    { name: "12 Inch", price: 31.50, originalPrice: 61.36, weight: "0.18 kg" },
    { name: "14 Inch", price: 31.50, originalPrice: 58.43, weight: "0.18 kg" },
    { name: "16 Inch", price: 31.50, originalPrice: 54.46, weight: "0.18 kg" },
    { name: "18 Inch", price: 35.99, originalPrice: 71.49, weight: "0.18 kg" },
    { name: "20 Inch", price: 40.49, originalPrice: 72.07, weight: "0.18 kg" },
    { name: "22 Inch", price: 47.51, originalPrice: 75.09, weight: "0.18 kg" },
    { name: "24 Inch", price: 57.23, originalPrice: 113.56, weight: "0.20 kg" },
    { name: "26 Inch", price: 59.96, originalPrice: 105.84, weight: "0.20 kg" },
    { name: "28 Inch", price: 62.64, originalPrice: 104.81, weight: "0.22 kg" },
    { name: "30 Inch", price: 68.91, originalPrice: 129.86, weight: "0.23 kg" },
    { name: "32 Inch", price: 79.86, originalPrice: 146.46, weight: "0.25 kg" },
    { name: "34 Inch", price: 91.35, originalPrice: 142.64, weight: "0.27 kg" },
    { name: "36 Inch", price: 96.71, originalPrice: 174.68, weight: "0.28 kg" },
    { name: "38 Inch", price: 102.32, originalPrice: 195.92, weight: "0.29 kg" },
    { name: "40 Inch", price: 111.59, originalPrice: 194.40, weight: "0.30 kg" },
    { name: "42 Inch", price: 155.97, originalPrice: 301.05, weight: "0.32 kg" }
  ]
},
"wigs-5": {
  id: "wigs-5",
  category: "wig",
  subCategory: "100%", // 子类目: 100% 系列
  name: '13x4 Jerry Curly Lace Front Wigs Human Hair-Brazilian Human Hair Wig Natural Full Edges Lace Pre-Plucked Lace Wig With Baby Hair For Women Ear To Ear HD Lace For Natural Color',
  description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "200% Density", // 假发专属属性: 密度
  laceArea: "13x4 HD Lace Front", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p5/p1.jpg",
    "../images/wig-p5/p2.jpg",
    "../images/wig-p5/p3.jpg",
    "../images/wig-p5/p4.jpg",
    "../images/wig-p5/p5.jpg",
    "../images/wig-p5/p6.jpg",
    "../images/wig-p5/p7.jpg",
    "../images/wig-p5/p8.jpg",
    "../images/wig-p5/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 79.43, originalPrice: 150.18, weight: "0.15 kg" },
    { name: "10 Inch", price: 80.86, originalPrice: 124.53, weight: "0.17 kg" },
    { name: "12 Inch", price: 87.29, originalPrice: 169.01, weight: "0.18 kg" },
    { name: "14 Inch", price: 94.43, originalPrice: 168.73, weight: "0.19 kg" },
    { name: "16 Inch", price: 102.29, originalPrice: 178.52, weight: "0.21 kg" },
    { name: "18 Inch", price: 115.14, originalPrice: 180.31, weight: "0.23 kg" },
    { name: "20 Inch", price: 128.71, originalPrice: 244.46, weight: "0.24 kg" },
    { name: "22 Inch", price: 145.86, originalPrice: 241.99, weight: "0.27 kg" },
    { name: "24 Inch", price: 165.14, originalPrice: 313.31, weight: "0.29 kg" },
    { name: "26 Inch", price: 172.29, originalPrice: 331.24, weight: "0.31 kg" },
    { name: "28 Inch", price: 190.14, originalPrice: 294.47, weight: "0.33 kg" },
    { name: "30 Inch", price: 206.57, originalPrice: 412.56, weight: "0.35 kg" },
    { name: "32 Inch", price: 233.71, originalPrice: 372.53, weight: "0.38 kg" },
    { name: "34 Inch", price: 262.29, originalPrice: 428.13, weight: "0.41 kg" },
    { name: "36 Inch", price: 290.86, originalPrice: 519.32, weight: "0.43 kg" },
    { name: "38 Inch", price: 319.43, originalPrice: 591.28, weight: "0.46 kg" },
    { name: "40 Inch", price: 348.00, originalPrice: 566.14, weight: "0.48 kg" }
  ]
},
"wigs-6": {
  id: "wigs-6",
  category: "wig",
  subCategory: "50%", // 子类目: 100% 系列
  name: '180 Density 16 inch Curly Short Bob Lace Front Human Hair Wigs For Women Depp Wave 13x4 HD Transparent Brazilian Lace Frontal Wig Closure Swiss Lace Wig Water Wave Pre Plucked',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "180% Density", // 假发专属属性: 密度
  laceArea: "13x4 HD Lace Front", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p6/p1.jpg",
    "../images/wig-p6/p2.jpg",
    "../images/wig-p6/p3.jpg",
    "../images/wig-p6/p4.jpg",
    "../images/wig-p6/p5.jpg",
    "../images/wig-p6/p6.jpg",
    "../images/wig-p6/p7.jpg",
    "../images/wig-p6/p8.jpg",
    "../images/wig-p6/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 34.16, originalPrice: 65.55, weight: "0.18 kg" },
    { name: "10 Inch", price: 34.73, originalPrice: 52.18, weight: "0.18 kg" },
    { name: "12 Inch", price: 34.88, originalPrice: 54.77, weight: "0.18 kg" },
    { name: "14 Inch", price: 34.23, originalPrice: 51.38, weight: "0.18 kg" },
    { name: "16 Inch", price: 37.07, originalPrice: 67.90, weight: "0.18 kg" },
    { name: "18 Inch", price: 39.20, originalPrice: 61.72, weight: "0.18 kg" },
    { name: "20 Inch", price: 54.65, originalPrice: 102.53, weight: "0.18 kg" },
    { name: "22 Inch", price: 59.84, originalPrice: 118.12, weight: "0.18 kg" },
    { name: "24 Inch", price: 61.59, originalPrice: 98.05, weight: "0.20 kg" },
    { name: "26 Inch", price: 64.71, originalPrice: 104.61, weight: "0.20 kg" },
    { name: "28 Inch", price: 68.81, originalPrice: 108.17, weight: "0.22 kg" },
    { name: "30 Inch", price: 77.37, originalPrice: 118.91, weight: "0.23 kg" },
    { name: "32 Inch", price: 91.43, originalPrice: 156.29, weight: "0.25 kg" },
    { name: "34 Inch", price: 99.41, originalPrice: 190.99, weight: "0.27 kg" },
    { name: "36 Inch", price: 113.42, originalPrice: 182.87, weight: "0.28 kg" },
    { name: "38 Inch", price: 116.16, originalPrice: 208.50, weight: "0.29 kg" },
    { name: "40 Inch", price: 129.92, originalPrice: 210.44, weight: "0.30 kg" },
    { name: "42 Inch", price: 149.76, originalPrice: 282.74, weight: "0.32 kg" }
  ]
},
"wigs-7": {
  id: "wigs-7",
  category: "wig",
  subCategory: "50%", // 子类目: 50% 系列
  name: '13x4 Lace Front Wigs Human Hair Pre Plucked Brazilian Wet and Wavy Human Hair Wigs for Women Curly Wave Lace Frontal Wig Natural Color (28 Inch)',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "180% Density", // 假发专属属性: 密度
  laceArea: "13x4 HD Lace Front", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p7/p1.jpg",
    "../images/wig-p7/p2.jpg",
    "../images/wig-p7/p3.jpg",
    "../images/wig-p7/p4.jpg",
    "../images/wig-p7/p5.jpg",
    "../images/wig-p7/p6.jpg",
    "../images/wig-p7/p7.jpg",
    "../images/wig-p7/p8.jpg",
    "../images/wig-p7/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 34.16, originalPrice: 65.55, weight: "0.18 kg" },
    { name: "10 Inch", price: 34.73, originalPrice: 52.18, weight: "0.18 kg" },
    { name: "12 Inch", price: 34.88, originalPrice: 54.77, weight: "0.18 kg" },
    { name: "14 Inch", price: 34.23, originalPrice: 51.38, weight: "0.18 kg" },
    { name: "16 Inch", price: 37.07, originalPrice: 67.90, weight: "0.18 kg" },
    { name: "18 Inch", price: 39.20, originalPrice: 61.72, weight: "0.18 kg" },
    { name: "20 Inch", price: 54.65, originalPrice: 102.53, weight: "0.18 kg" },
    { name: "22 Inch", price: 59.84, originalPrice: 118.12, weight: "0.18 kg" },
    { name: "24 Inch", price: 61.59, originalPrice: 98.05, weight: "0.20 kg" },
    { name: "26 Inch", price: 64.71, originalPrice: 104.61, weight: "0.20 kg" },
    { name: "28 Inch", price: 68.81, originalPrice: 108.17, weight: "0.22 kg" },
    { name: "30 Inch", price: 77.37, originalPrice: 118.91, weight: "0.23 kg" },
    { name: "32 Inch", price: 91.43, originalPrice: 156.29, weight: "0.25 kg" },
    { name: "34 Inch", price: 99.41, originalPrice: 190.99, weight: "0.27 kg" },
    { name: "36 Inch", price: 113.42, originalPrice: 182.87, weight: "0.28 kg" },
    { name: "38 Inch", price: 116.16, originalPrice: 208.50, weight: "0.29 kg" },
    { name: "40 Inch", price: 129.92, originalPrice: 210.44, weight: "0.30 kg" },
    { name: "42 Inch", price: 149.76, originalPrice: 282.74, weight: "0.32 kg" }
  ]
},
"wigs-8": {
  id: "wigs-8",
  category: "wig",
  subCategory: "50%", // 子类目: 50% 系列
  name: '15A Brazilian Straight Human Hair Bundles 26 28 30 32Inch  Unprocessed Virgin Straight Weave 4 Bundles Human Hair',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "Bundle", // 假发专属属性: 密度
  laceArea: "1/3/4", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p8/p1.jpg",
    "../images/wig-p8/p2.jpg",
    "../images/wig-p8/p3.jpg",
    "../images/wig-p8/p4.jpg",
    "../images/wig-p8/p5.jpg",
    "../images/wig-p8/p6.jpg",
    "../images/wig-p8/p7.jpg",
    "../images/wig-p8/p8.jpg",
    "../images/wig-p8/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 13.50, originalPrice: 26.91, weight: "0.11 kg" },
    { name: "10 Inch", price: 13.50, originalPrice: 23.00, weight: "0.11 kg" },
    { name: "12 Inch", price: 13.50, originalPrice: 24.73, weight: "0.11 kg" },
    { name: "14 Inch", price: 15.75, originalPrice: 29.69, weight: "0.11 kg" },
    { name: "16 Inch", price: 14.85, originalPrice: 28.58, weight: "0.11 kg" },
    { name: "18 Inch", price: 15.53, originalPrice: 24.60, weight: "0.11 kg" },
    { name: "20 Inch", price: 17.55, originalPrice: 28.96, weight: "0.11 kg" },
    { name: "22 Inch", price: 19.70, originalPrice: 36.17, weight: "0.11 kg" },
    { name: "24 Inch", price: 21.95, originalPrice: 34.99, weight: "0.11 kg" },
    { name: "26 Inch", price: 24.30, originalPrice: 41.27, weight: "0.11 kg" },
    { name: "28 Inch", price: 28.70, originalPrice: 47.80, weight: "0.11 kg" },
    { name: "30 Inch", price: 31.05, originalPrice: 50.96, weight: "0.11 kg" },
    { name: "32 Inch", price: 36.00, originalPrice: 70.13, weight: "0.11 kg" },
    { name: "34 Inch", price: 37.13, originalPrice: 58.32, weight: "0.11 kg" },
    { name: "36 Inch", price: 38.25, originalPrice: 58.23, weight: "0.11 kg" },
    { name: "38 Inch", price: 46.92, originalPrice: 74.47, weight: "0.11 kg" },
    { name: "40 Inch", price: 55.70, originalPrice: 99.93, weight: "0.11 kg" },
    { name: "42 Inch", price: 57.29, originalPrice: 97.66, weight: "0.11 kg" },
    { name: "44 Inch", price: 61.70, originalPrice: 112.44, weight: "0.11 kg" },
    { name: "10 12 14", price: 37.80, originalPrice: 67.47, weight: "0.33 kg" },
    { name: "10 12 14 16", price: 56.82, originalPrice: 91.75, weight: "0.44 kg" },
    { name: "12 14 16", price: 40.83, originalPrice: 78.51, weight: "0.33 kg" },
    { name: "12 14 16 18", price: 61.41, originalPrice: 112.02, weight: "0.44 kg" },
    { name: "14 16 18", price: 49.79, originalPrice: 77.52, weight: "0.33 kg" },
    { name: "14 16 18 20", price: 65.93, originalPrice: 119.59, weight: "0.44 kg" },
    { name: "16 18 20", price: 54.75, originalPrice: 100.13, weight: "0.33 kg" },
    { name: "16 18 20 22", price: 71.82, originalPrice: 140.86, weight: "0.44 kg" },
    { name: "18 20 22", price: 59.24, originalPrice: 98.07, weight: "0.33 kg" },
    { name: "18 20 22 24", price: 77.55, originalPrice: 136.48, weight: "0.44 kg" },
    { name: "20 22 24", price: 63.62, originalPrice: 115.12, weight: "0.33 kg" },
    { name: "20 22 24 26", price: 82.85, originalPrice: 153.41, weight: "0.44 kg" },
    { name: "22 24 26", price: 68.25, originalPrice: 107.67, weight: "0.33 kg" },
    { name: "22 24 26 28", price: 90.81, originalPrice: 136.42, weight: "0.44 kg" },
    { name: "24 26 28", price: 74.45, originalPrice: 114.53, weight: "0.33 kg" },
    { name: "24 26 28 30", price: 98.36, originalPrice: 151.77, weight: "0.44 kg" },
    { name: "26 28 30", price: 80.66, originalPrice: 128.49, weight: "0.33 kg" },
    { name: "26 28 30 32", price: 105.47, originalPrice: 188.43, weight: "0.44 kg" },
    { name: "28 30 32", price: 84.89, originalPrice: 143.21, weight: "0.33 kg" },
    { name: "28 30 32 34", price: 112.17, originalPrice: 186.49, weight: "0.44 kg" },
    { name: "30 32 34", price: 88.83, originalPrice: 147.72, weight: "0.33 kg" },
    { name: "30 32 34 36", price: 121.26, originalPrice: 241.49, weight: "0.44 kg" },
    { name: "32 34 36", price: 101.52, originalPrice: 196.45, weight: "0.33 kg" },
    { name: "32 34 36 38", price: 129.20, originalPrice: 217.70, weight: "0.44 kg" },
    { name: "34 36 38", price: 110.27, originalPrice: 178.66, weight: "0.33 kg" },
    { name: "34 36 38 40", price: 141.75, originalPrice: 255.55, weight: "0.44 kg" },
    { name: "36 38 40", price: 114.21, originalPrice: 203.06, weight: "0.33 kg" },
    { name: "36 38 40 42", price: 151.88, originalPrice: 277.60, weight: "0.44 kg" },
    { name: "38 40 42", price: 123.38, originalPrice: 200.24, weight: "0.33 kg" },
    { name: "38 40 42 44", price: 159.00, originalPrice: 291.92, weight: "0.44 kg" },
    { name: "40 42 44", price: 127.79, originalPrice: 213.50, weight: "0.33 kg" },
    { name: "20 20 20", price: 62.10, originalPrice: 120.42, weight: "0.33 kg" },
    { name: "20 20 20 20", price: 81.21, originalPrice: 148.29, weight: "0.44 kg" },
    { name: "22 22 22", price: 66.63, originalPrice: 115.88, weight: "0.33 kg" },
    { name: "22 22 22 22", price: 88.65, originalPrice: 166.37, weight: "0.44 kg" }
  ]
},
"wigs-9": {
  id: "wigs-9",
  category: "wig",
  subCategory: "50%", // 子类目: 50% 系列
  name: '15A Brazilian Straight Human Hair 4 Bundles 26 28 30 32 Inch Straight Bundles Human Hair Unprocessed Virgin Hair Weave Bundles Hair Black',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "Bundle", // 假发专属属性: 密度
  laceArea: "1/3/4", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p9/p1.jpg",
    "../images/wig-p9/p2.jpg",
    "../images/wig-p9/p3.jpg",
    "../images/wig-p9/p4.jpg",
    "../images/wig-p9/p5.jpg",
    "../images/wig-p9/p6.jpg",
    "../images/wig-p9/p7.jpg",
    "../images/wig-p9/p8.jpg",
    "../images/wig-p9/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 13.50, originalPrice: 26.91, weight: "0.11 kg" },
    { name: "10 Inch", price: 13.50, originalPrice: 23.00, weight: "0.11 kg" },
    { name: "12 Inch", price: 13.50, originalPrice: 24.73, weight: "0.11 kg" },
    { name: "14 Inch", price: 15.75, originalPrice: 29.69, weight: "0.11 kg" },
    { name: "16 Inch", price: 14.85, originalPrice: 28.58, weight: "0.11 kg" },
    { name: "18 Inch", price: 15.53, originalPrice: 24.60, weight: "0.11 kg" },
    { name: "20 Inch", price: 17.55, originalPrice: 28.96, weight: "0.11 kg" },
    { name: "22 Inch", price: 19.70, originalPrice: 36.17, weight: "0.11 kg" },
    { name: "24 Inch", price: 21.95, originalPrice: 34.99, weight: "0.11 kg" },
    { name: "26 Inch", price: 24.30, originalPrice: 41.27, weight: "0.11 kg" },
    { name: "28 Inch", price: 28.70, originalPrice: 47.80, weight: "0.11 kg" },
    { name: "30 Inch", price: 31.05, originalPrice: 50.96, weight: "0.11 kg" },
    { name: "32 Inch", price: 36.00, originalPrice: 70.13, weight: "0.11 kg" },
    { name: "34 Inch", price: 37.13, originalPrice: 58.32, weight: "0.11 kg" },
    { name: "36 Inch", price: 38.25, originalPrice: 58.23, weight: "0.11 kg" },
    { name: "38 Inch", price: 46.92, originalPrice: 74.47, weight: "0.11 kg" },
    { name: "40 Inch", price: 55.70, originalPrice: 99.93, weight: "0.11 kg" },
    { name: "42 Inch", price: 57.29, originalPrice: 97.66, weight: "0.11 kg" },
    { name: "44 Inch", price: 61.70, originalPrice: 112.44, weight: "0.11 kg" },
    { name: "10 12 14", price: 37.80, originalPrice: 67.47, weight: "0.33 kg" },
    { name: "10 12 14 16", price: 56.82, originalPrice: 91.75, weight: "0.44 kg" },
    { name: "12 14 16", price: 40.83, originalPrice: 78.51, weight: "0.33 kg" },
    { name: "12 14 16 18", price: 61.41, originalPrice: 112.02, weight: "0.44 kg" },
    { name: "14 16 18", price: 49.79, originalPrice: 77.52, weight: "0.33 kg" },
    { name: "14 16 18 20", price: 65.93, originalPrice: 119.59, weight: "0.44 kg" },
    { name: "16 18 20", price: 54.75, originalPrice: 100.13, weight: "0.33 kg" },
    { name: "16 18 20 22", price: 71.82, originalPrice: 140.86, weight: "0.44 kg" },
    { name: "18 20 22", price: 59.24, originalPrice: 98.07, weight: "0.33 kg" },
    { name: "18 20 22 24", price: 77.55, originalPrice: 136.48, weight: "0.44 kg" },
    { name: "20 22 24", price: 63.62, originalPrice: 115.12, weight: "0.33 kg" },
    { name: "20 22 24 26", price: 82.85, originalPrice: 153.41, weight: "0.44 kg" },
    { name: "22 24 26", price: 68.25, originalPrice: 107.67, weight: "0.33 kg" },
    { name: "22 24 26 28", price: 90.81, originalPrice: 136.42, weight: "0.44 kg" },
    { name: "24 26 28", price: 74.45, originalPrice: 114.53, weight: "0.33 kg" },
    { name: "24 26 28 30", price: 98.36, originalPrice: 151.77, weight: "0.44 kg" },
    { name: "26 28 30", price: 80.66, originalPrice: 128.49, weight: "0.33 kg" },
    { name: "26 28 30 32", price: 105.47, originalPrice: 188.43, weight: "0.44 kg" },
    { name: "28 30 32", price: 84.89, originalPrice: 143.21, weight: "0.33 kg" },
    { name: "28 30 32 34", price: 112.17, originalPrice: 186.49, weight: "0.44 kg" },
    { name: "30 32 34", price: 88.83, originalPrice: 147.72, weight: "0.33 kg" },
    { name: "30 32 34 36", price: 121.26, originalPrice: 241.49, weight: "0.44 kg" },
    { name: "32 34 36", price: 101.52, originalPrice: 196.45, weight: "0.33 kg" },
    { name: "32 34 36 38", price: 129.20, originalPrice: 217.70, weight: "0.44 kg" },
    { name: "34 36 38", price: 110.27, originalPrice: 178.66, weight: "0.33 kg" },
    { name: "34 36 38 40", price: 141.75, originalPrice: 255.55, weight: "0.44 kg" },
    { name: "36 38 40", price: 114.21, originalPrice: 203.06, weight: "0.33 kg" },
    { name: "36 38 40 42", price: 151.88, originalPrice: 277.60, weight: "0.44 kg" },
    { name: "38 40 42", price: 123.38, originalPrice: 200.24, weight: "0.33 kg" },
    { name: "38 40 42 44", price: 159.00, originalPrice: 291.92, weight: "0.44 kg" },
    { name: "40 42 44", price: 127.79, originalPrice: 213.50, weight: "0.33 kg" },
    { name: "20 20 20", price: 62.10, originalPrice: 120.42, weight: "0.33 kg" },
    { name: "20 20 20 20", price: 81.21, originalPrice: 148.29, weight: "0.44 kg" },
    { name: "22 22 22", price: 66.63, originalPrice: 115.88, weight: "0.33 kg" },
    { name: "22 22 22 22", price: 88.65, originalPrice: 166.37, weight: "0.44 kg" }
  ]
},
"wigs-10": {
  id: "wigs-10",
  category: "wig",
  subCategory: "50%", // 子类目: 50% 系列
  name: 'Burgundy 99 with 99J Highlight Red Colored 13X4 Lace Closure Wig Body Wave Pre-Plucked 13x4 Lace Front Human Hair Wig',
  description: "Crafted from 50% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "180% Density", // 假发专属属性: 密度
  laceArea: "13x4 HD Lace Front", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p10/p1.jpg",
    "../images/wig-p10/p2.jpg",
    "../images/wig-p10/p3.jpg",
    "../images/wig-p10/p4.jpg",
    "../images/wig-p10/p5.jpg",
    "../images/wig-p10/p6.jpg",
    "../images/wig-p10/p7.jpg",
    "../images/wig-p10/p8.jpg",
    "../images/wig-p10/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 36.35, originalPrice: 59.47, weight: "0.18 kg" },
    { name: "10 Inch", price: 38.55, originalPrice: 68.94, weight: "0.18 kg" },
    { name: "12 Inch", price: 38.15, originalPrice: 63.52, weight: "0.18 kg" },
    { name: "14 Inch", price: 41.88, originalPrice: 79.50, weight: "0.18 kg" },
    { name: "16 Inch", price: 54.33, originalPrice: 104.79, weight: "0.18 kg" },
    { name: "18 Inch", price: 57.42, originalPrice: 107.63, weight: "0.18 kg" },
    { name: "20 Inch", price: 61.20, originalPrice: 119.18, weight: "0.18 kg" },
    { name: "22 Inch", price: 65.61, originalPrice: 102.48, weight: "0.18 kg" },
    { name: "24 Inch", price: 72.47, originalPrice: 132.12, weight: "0.20 kg" },
    { name: "26 Inch", price: 72.71, originalPrice: 126.09, weight: "0.20 kg" },
    { name: "28 Inch", price: 76.23, originalPrice: 124.44, weight: "0.22 kg" },
    { name: "30 Inch", price: 84.89, originalPrice: 150.36, weight: "0.23 kg" },
    { name: "32 Inch", price: 96.30, originalPrice: 178.44, weight: "0.25 kg" },
    { name: "34 Inch", price: 106.13, originalPrice: 162.89, weight: "0.27 kg" },
    { name: "36 Inch", price: 120.45, originalPrice: 200.68, weight: "0.28 kg" },
    { name: "38 Inch", price: 128.31, originalPrice: 210.33, weight: "0.29 kg" },
    { name: "40 Inch", price: 149.75, originalPrice: 282.53, weight: "0.30 kg" },
    { name: "42 Inch", price: 160.08, originalPrice: 293.39, weight: "0.32 kg" }
  ]
},
"wigs-11": {
  id: "wigs-11",
  category: "wig",
  subCategory: "100%", // 子类目: 100% 系列
  name: '13x4 Glueless Wig Human Hair Black Wig - 250% Density Natural Color Straight Hair - Pre-Plucked Hairline And Baby Hairs - Ready To Wear No Glue For Women',
  description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "200% Density", // 假发专属属性: 密度
  laceArea: "13x4 HD Lace Front", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p11/p1.jpg",
    "../images/wig-p11/p2.jpg",
    "../images/wig-p11/p3.jpg",
    "../images/wig-p11/p4.jpg",
    "../images/wig-p11/p5.jpg",
    "../images/wig-p11/p6.jpg",
    "../images/wig-p11/p7.jpg",
    "../images/wig-p11/p8.jpg",
    "../images/wig-p11/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 69.43, originalPrice: 112.93, weight: "0.15 kg" },
    { name: "10 Inch", price: 70.86, originalPrice: 133.89, weight: "0.17 kg" },
    { name: "12 Inch", price: 77.29, originalPrice: 136.56, weight: "0.18 kg" },
    { name: "14 Inch", price: 84.43, originalPrice: 136.81, weight: "0.19 kg" },
    { name: "16 Inch", price: 92.29, originalPrice: 155.37, weight: "0.21 kg" },
    { name: "18 Inch", price: 105.14, originalPrice: 179.12, weight: "0.23 kg" },
    { name: "20 Inch", price: 118.71, originalPrice: 229.96, weight: "0.24 kg" },
    { name: "22 Inch", price: 135.86, originalPrice: 257.59, weight: "0.27 kg" },
    { name: "24 Inch", price: 155.14, originalPrice: 256.91, weight: "0.29 kg" },
    { name: "26 Inch", price: 162.29, originalPrice: 267.46, weight: "0.31 kg" },
    { name: "28 Inch", price: 180.14, originalPrice: 323.29, weight: "0.33 kg" },
    { name: "30 Inch", price: 196.57, originalPrice: 351.56, weight: "0.35 kg" },
    { name: "32 Inch", price: 223.71, originalPrice: 433.37, weight: "0.38 kg" },
    { name: "34 Inch", price: 252.29, originalPrice: 383.89, weight: "0.41 kg" },
    { name: "36 Inch", price: 280.86, originalPrice: 477.92, weight: "0.43 kg" },
    { name: "38 Inch", price: 309.43, originalPrice: 486.44, weight: "0.46 kg" },
    { name: "40 Inch", price: 338.00, originalPrice: 653.20, weight: "0.48 kg" }
  ]
},
"wigs-12": {
  id: "wigs-12",
  category: "wig",
  subCategory: "100%", // 子类目: 100% 系列
  name: '34 Inch 200 Density13x4 613 And 6x5 Glueless Wigs Natural Black Put On And Go Human Hair Pre Plucked Pre Cut 6x5 Lace Closure Wigs For Women Deep Curly Virgin Brazilian Human Hair Wig For Beginners Jerry Curly Human Hair Wig',
  description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "200% Density", // 假发专属属性: 密度
  laceArea: "13x4/5x5 HD Lace ", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p12/p1.jpg",
    "../images/wig-p12/p2.jpg",
    "../images/wig-p12/p3.jpg",
    "../images/wig-p12/p4.jpg",
    "../images/wig-p12/p5.jpg",
    "../images/wig-p12/p6.jpg",
    "../images/wig-p12/p7.jpg",
    "../images/wig-p12/p8.jpg",
    "../images/wig-p12/p9.jpg"
  ],
  sizes: [
    { name: "8 Inch", price: 76.43, originalPrice: 150.18, weight: "0.15 kg" },
    { name: "10 Inch", price: 80.86, originalPrice: 124.53, weight: "0.17 kg" },
    { name: "12 Inch", price: 85.29, originalPrice: 169.01, weight: "0.18 kg" },
    { name: "14 Inch", price: 92.43, originalPrice: 168.73, weight: "0.19 kg" },
    { name: "16 Inch", price: 102.29, originalPrice: 178.52, weight: "0.21 kg" },
    { name: "18 Inch", price: 115.14, originalPrice: 180.31, weight: "0.23 kg" },
    { name: "20 Inch", price: 128.71, originalPrice: 244.46, weight: "0.24 kg" },
    { name: "22 Inch", price: 145.86, originalPrice: 241.99, weight: "0.27 kg" },
    { name: "24 Inch", price: 165.14, originalPrice: 313.31, weight: "0.29 kg" },
    { name: "26 Inch", price: 172.29, originalPrice: 331.24, weight: "0.31 kg" },
    { name: "28 Inch", price: 190.14, originalPrice: 294.47, weight: "0.33 kg" },
    { name: "30 Inch", price: 206.57, originalPrice: 412.56, weight: "0.35 kg" },
    { name: "32 Inch", price: 233.71, originalPrice: 372.53, weight: "0.38 kg" },
    { name: "34 Inch", price: 262.29, originalPrice: 428.13, weight: "0.41 kg" },
    { name: "36 Inch", price: 290.86, originalPrice: 519.32, weight: "0.43 kg" },
    { name: "38 Inch", price: 319.43, originalPrice: 591.28, weight: "0.46 kg" },
    { name: "40 Inch", price: 348.00, originalPrice: 566.14, weight: "0.48 kg" }
  ]
},
"wigs-13": {
  id: "wigs-13",
  category: "wig",
  subCategory: "100%", // 子类目: 100% 系列
  name: '30 34 Inch 15A 100% human hair Long Bone Straight  Human Hair Bundles - Real Virgin  Hair Extensions, Double Weft Soft Smooth Weaving Bundles For Women',
  description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and natural",
  density: "Bundle-FTST", // 假发专属属性: 密度
  laceArea: "1/3/4", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p13/p2.jpg",
    "../images/wig-p13/p3.jpg",
    "../images/wig-p13/p4.jpg",
    "../images/wig-p13/p5.jpg",
    "../images/wig-p13/p6.jpg",
    "../images/wig-p13/p7.jpg",
    "../images/wig-p13/p8.jpg",
    "../images/wig-p13/p9.jpg",
      "../images/wig-p13/p10.jpg",
      "../images/wig-p13/p11.jpg"
  ],
  sizes: [
    { name: "12 Inch", price: 35.00, originalPrice: 65, weight: "0.15 kg" },
    { name: "14 Inch", price: 39.23, originalPrice: 80.31, weight: "0.16 kg" },
    { name: "16 Inch", price: 45.38, originalPrice: 88.41, weight: "0.18 kg" },
    { name: "18 Inch", price: 48.46, originalPrice: 92.03, weight: "0.20 kg" },
    { name: "20 Inch", price: 57.69, originalPrice: 116.92, weight: "0.24 kg" },
    { name: "22 Inch", price: 65.38, originalPrice: 130.52, weight: "0.25 kg" },
    { name: "24 Inch", price: 77.69, originalPrice: 166.72, weight: "0.27 kg" },
      { name: "26 Inch", price: 88.46, originalPrice: 180.03, weight: "0.30 kg" },
    { name: "28 Inch", price: 99.69, originalPrice: 200.92, weight: "0.34 kg" },
    { name: "30 Inch", price: 105.38, originalPrice: 220.52, weight: "0.38 kg" },
    { name: "32 Inch", price: 110.69, originalPrice: 240.72, weight: "0.40 kg" },
  ]
},
  "wigs-14": {
  id: "wigs-14",
  category: "wig",
  subCategory: "100%", // 子类目: 100% 系列
  name: "[LIVE 13x4 Combo: 2 Women's Human HairWigs] 13x4  HD Transparent Lace Front Wigs,22-30 Inch 2-Pack Buy 1 Get 1 Free, Deep Wave, Body Wave & Straight, withBaby Hair, 180% Density Natural Black",
  description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "180% Density", // 假发专属属性: 密度
  laceArea: "13x4/5x5 HD Lace ", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p14/p1.jpg",
    "../images/wig-p14/p2.jpg",
    "../images/wig-p14/p3.jpg",
    "../images/wig-p14/p4.jpg",
    "../images/wig-p14/p5.jpg",
    "../images/wig-p14/p6.jpg",
    "../images/wig-p14/p7.jpg"
  ],
  sizes: [
    { name: "DW+DW4/27-20+20", price: 100.99, originalPrice: 200.18, weight: "0.48 kg" },
    { name: "BW+BW99J-20+20", price: 100.99, originalPrice: 200.25, weight: "0.50 kg" },
    { name: "BW+BW4/27-20+20", price: 100.99, originalPrice: 200.28, weight: "0.48 kg" },
    { name: "BW+DW-20+20", price: 100.99, originalPrice: 200.50, weight: "0.50 kg" },
    { name: "BW+ST-20+20", price: 100.99, originalPrice: 208.52, weight: "0.48 kg" },
    { name: "DW+BW99J-20+20", price: 100.99, originalPrice: 200.31, weight: "0.48 kg" },
    { name: "DW+BW4/27-20+20", price: 100.99, originalPrice: 204.46, weight: "0.48 kg" },
    { name: "22 Inch COMBO", price: 107.99, originalPrice: 241.99, weight: "0.56 kg" },
    { name: "24 Inch COMBO", price: 117.99, originalPrice: 313.31, weight: "0.60 kg" },
    { name: "26 Inch COMBO", price: 129.99, originalPrice: 331.24, weight: "0.66 kg" },
    { name: "28 Inch COMBO", price: 145.99, originalPrice: 294.47, weight: "0.70 kg" },
    { name: "30 Inch COMBO", price: 153.99, originalPrice: 412.56, weight: "0.72 kg" }
  ]
},
"wigs-15": {
  id: "wigs-15",
  category: "wig",
  subCategory: "100%", // 子类目: 100% 系列
  name: "[LIVE Combo: 2 Women’s Human Hair Wigs] 13x4 HD Transparent Lace Front Wigs, 22-30 Inch 2-Pack Buy 1 Get 1 Free, Body Wave, Deep Wave & Straight, Pre-Plucked with Baby Hair, 180% Density Natural Black",
  description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
  density: "180% Density", // 假发专属属性: 密度
  laceArea: "13x4/5x5 HD Lace ", // 假发专属属性: 蕾丝面积
  images: [
    "../images/wig-p15/p1.jpg",
    "../images/wig-p15/p2.jpg",
    "../images/wig-p15/p3.jpg",
    "../images/wig-p15/p4.jpg",
    "../images/wig-p15/p5.jpg",
    "../images/wig-p15/p6.jpg",
    "../images/wig-p15/p7.jpg",
    "../images/wig-p15/p8.jpg"
  ],
  sizes: [
    { name: "DW+BW4/27-20+20", price: 110.99, originalPrice: 200.18, weight: "0.48 kg" },
    { name: "DW+BW-20+20", price: 110.99, originalPrice: 200.25, weight: "0.50 kg" },
    { name: "DW+BW4/27-20+20", price: 110.99, originalPrice: 200.28, weight: "0.48 kg" },
    { name: "DW+DW-20+20", price: 110.99, originalPrice: 200.50, weight: "0.50 kg" },
    { name: "BW+BW99J-20+20", price: 110.99, originalPrice: 200.25, weight: "0.50 kg" },
    { name: "BW+BW4/27-20+20", price: 110.99, originalPrice: 200.28, weight: "0.48 kg" },
    { name: "BW+DW-20+20", price: 110.99, originalPrice: 200.50, weight: "0.50 kg" },
    { name: "BW+ST-20+20", price: 110.99, originalPrice: 208.52, weight: "0.48 kg" },
    { name: "DW+BW99J-20+20", price: 110.99, originalPrice: 200.31, weight: "0.48 kg" },
    { name: "DW+BW4/27-20+20", price: 110.99, originalPrice: 204.46, weight: "0.48 kg" },
    { name: "22 Inch COMBO", price: 118.99, originalPrice: 241.99, weight: "0.56 kg" },
    { name: "24 Inch COMBO", price: 129.99, originalPrice: 260.31, weight: "0.60 kg" },
    { name: "26 Inch COMBO", price: 142.99, originalPrice: 281.24, weight: "0.66 kg" },
    { name: "28 Inch COMBO", price: 160.99, originalPrice: 330.47, weight: "0.70 kg" },
    { name: "30 Inch COMBO", price: 169.99, originalPrice: 412.56, weight: "0.72 kg" }
  ]
},
  "grocery-1": {
      id: "grocery-1",
      category: "grocery",
      name: "Organic Bamboo Fiber Bottle",
      description: "Eco-friendly, durable, and sustainable bottle for everyday hydration.",
      images: [
          "../images/grocery-p1/p1.jpg"
      ],
      sizes: [
          { name: "Standard (500ml)", price: 100.00, originalPrice: 200.00 },
          { name: "Large (750ml)", price: 100.00, originalPrice: 200.00 }
      ]
  },
  "grocery-2": {
      id: "grocery-1",
      category: "grocery",
      name: "Organic Bamboo Fiber Bottle",
      description: "Eco-friendly, durable, and sustainable bottle for everyday hydration.",
      images: [
        "../images/grocery-p1/p1.jpg"
    ],
    sizes: [
        { name: "Standard (500ml)", price: 100.00, originalPrice: 200.00 },
        { name: "Large (750ml)", price: 100.00, originalPrice: 200.00 }
    ]
  },
  "grocery-3": {
      id: "grocery-1",
      category: "grocery",
      name: "Organic Bamboo Fiber Bottle",
      description: "Eco-friendly, durable, and sustainable bottle for everyday hydration.",
      images: [
        "../images/grocery-p1/p1.jpg"
    ],
    sizes: [
        { name: "Standard (500ml)", price: 100.00, originalPrice: 200.00 },
        { name: "Large (750ml)", price: 100.00, originalPrice: 200.00 }
    ]
  },
  "grocery-4": {
      id: "grocery-1",
      category: "grocery",
      name: "Organic Bamboo Fiber Bottle",
      description: "Eco-friendly, durable, and sustainable bottle for everyday hydration.",
      images: [
        "../images/grocery-p1/p1.jpg"
    ],
    sizes: [
        { name: "Standard (500ml)", price: 100.00, originalPrice: 200.00 },
        { name: "Large (750ml)", price: 100.00, originalPrice: 200.00 }
    ]
  },
  "grocery-5": {
      id: "grocery-1",
      category: "grocery",
      name: "Organic Bamboo Fiber Bottle",
      description: "Eco-friendly, durable, and sustainable bottle for everyday hydration.",
      images: [
        "../images/grocery-p1/p1.jpg"
    ],
    sizes: [
        { name: "Standard (500ml)", price: 100.00, originalPrice: 200.00 },
        { name: "Large (750ml)", price: 100.00, originalPrice: 200.00 }
    ]
  },
  "grocery-6": {
      id: "grocery-1",
      category: "grocery",
      name: "Organic Bamboo Fiber Bottle",
      description: "Eco-friendly, durable, and sustainable bottle for everyday hydration.",
      images: [
        "../images/grocery-p1/p1.jpg"
    ],
    sizes: [
        { name: "Standard (500ml)", price: 100.00, originalPrice: 200.00 },
        { name: "Large (750ml)", price: 100.00, originalPrice: 200.00 }
    ]
  },
  "grocery-7": {
      id: "grocery-1",
      category: "grocery",
      name: "Organic Bamboo Fiber Bottle",
      description: "Eco-friendly, durable, and sustainable bottle for everyday hydration.",
      images: [
        "../images/grocery-p1/p1.jpg"
    ],
    sizes: [
        { name: "Standard (500ml)", price: 100.00, originalPrice: 200.00 },
        { name: "Large (750ml)", price: 100.00, originalPrice: 200.00 }
    ]
  },
};

// 获取所有商品数组
function getAllProducts() {
  return Object.values(productDatabase);
}

// 根据商品 ID 获取单条数据
function getProductById(id) {
  return productDatabase[id] || null;
}
// 1. 在这里集中写入你想设为畅销产品的 ID 即可！
const bestSellerIds = ["wigs-14", "wigs-15", "grocery-1"]; 

// 2. 提供一个获取畅销商品的辅助函数
function getBestSellers() {
  const all = Object.values(productDatabase);
  // 过滤出 ID 存在于 bestSellerIds 数组中的商品
  return all.filter(p => bestSellerIds.includes(p.id));
}
