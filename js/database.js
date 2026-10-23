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
    subCategory: "70%", // 子类目: 100% 系列
    name: '18 20 22 Inch Body Wave Real Human Hair Bundles - 3 Bundles Double Drawn Ultra Thin Weft, Cuticle Aligned Long-Lasting Professional Sew In Extensions, Reusable And Dyeable',
    description: "Crafted from 70% premium Brazilian human hair, this wig offers unmatched softness and natural",
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
      { name: "8 Inch", price: 15.00, originalPrice: 27.30, weight: "0.11 kg" },
      { name: "10 Inch", price: 15.00, originalPrice: 22.69, weight: "0.11 kg" },
      { name: "12 Inch", price: 15.00, originalPrice: 24.56, weight: "0.11 kg" },
      { name: "14 Inch", price: 22.53, originalPrice: 36.31, weight: "0.11 kg" },
      { name: "16 Inch", price: 22.70, originalPrice: 42.41, weight: "0.11 kg" },
      { name: "18 Inch", price: 23.95, originalPrice: 44.03, weight: "0.11 kg" },
      { name: "20 Inch", price: 24.11, originalPrice: 46.92, weight: "0.11 kg" },
      { name: "22 Inch", price: 24.31, originalPrice: 37.52, weight: "0.11 kg" },
      { name: "24 Inch", price: 25.55, originalPrice: 43.72, weight: "0.11 kg" },
      { name: "26 Inch", price: 26.83, originalPrice: 40.64, weight: "0.11 kg" },
      { name: "28 Inch", price: 35.90, originalPrice: 57.77, weight: "0.11 kg" },
      { name: "30 Inch", price: 35.46, originalPrice: 62.15, weight: "0.11 kg" },
      { name: "32 Inch", price: 43.60, originalPrice: 65.98, weight: "0.11 kg" },
      { name: "34 Inch", price: 34.75, originalPrice: 55.58, weight: "0.11 kg" },
      { name: "36 Inch", price: 35.50, originalPrice: 64.79, weight: "0.11 kg" },
      { name: "38 Inch", price: 41.28, originalPrice: 73.17, weight: "0.11 kg" },
      { name: "40 Inch", price: 47.13, originalPrice: 75.89, weight: "0.11 kg" },
      { name: "42 Inch", price: 48.19, originalPrice: 86.48, weight: "0.11 kg" },
      { name: "44 Inch", price: 51.13, originalPrice: 97.39, weight: "0.11 kg" },
      { name: "10 12 14", price: 35.19, originalPrice: 52.90, weight: "0.33 kg" },
      { name: "10 12 14 16", price: 47.88, originalPrice: 91.11, weight: "0.44 kg" },
      { name: "12 14 16", price: 38.96, originalPrice: 72.04, weight: "0.33 kg" },
      { name: "12 14 16 18", price: 50.94, originalPrice: 85.08, weight: "0.44 kg" },
      { name: "14 16 18", price: 43.19, originalPrice: 68.14, weight: "0.33 kg" },
      { name: "14 16 18 20", price: 53.95, originalPrice: 106.75, weight: "0.44 kg" },
      { name: "16 18 20", price: 46.50, originalPrice: 77.58, weight: "0.33 kg" },
      { name: "16 18 20 22", price: 57.65, originalPrice: 89.15, weight: "0.44 kg" },
      { name: "18 20 22", price: 50.01, originalPrice: 77.43, weight: "0.33 kg" },
      { name: "18 20 22 24", price: 61.62, originalPrice: 118.54, weight: "0.44 kg" },
      { name: "20 22 24", price: 52.41, originalPrice: 94.44, weight: "0.33 kg" },
      { name: "20 22 24 26", price: 65.46, originalPrice: 124.61, weight: "0.44 kg" },
      { name: "22 24 26", price: 56.80, originalPrice: 105.92, weight: "0.33 kg" },
      { name: "22 24 26 28", price: 70.50, originalPrice: 124.65, weight: "0.44 kg" },
      { name: "24 26 28", price: 60.00, originalPrice: 119.19, weight: "0.33 kg" },
      { name: "24 26 28 30", price: 75.00, originalPrice: 126.70, weight: "0.44 kg" },
      { name: "26 28 30", price: 63.33, originalPrice: 112.48, weight: "0.33 kg" },
      { name: "26 28 30 32", price: 80.57, originalPrice: 154.27, weight: "0.44 kg" },
      { name: "28 30 32", price: 66.29, originalPrice: 119.94, weight: "0.33 kg" },
      { name: "28 30 32 34", price: 84.29, originalPrice: 162.75, weight: "0.44 kg" },
      { name: "30 32 34", price: 69.00, originalPrice: 123.42, weight: "0.33 kg" },
      { name: "30 32 34 36", price: 89.94, originalPrice: 166.59, weight: "0.44 kg" },
      { name: "32 34 36", price: 90.35, originalPrice: 137.60, weight: "0.33 kg" },
      { name: "32 34 36 38", price: 96.78, originalPrice: 156.20, weight: "0.44 kg" },
      { name: "34 36 38", price: 95.37, originalPrice: 156.85, weight: "0.33 kg" },
      { name: "34 36 38 40", price: 104.50, originalPrice: 160.92, weight: "0.44 kg" },
      { name: "36 38 40", price: 89.31, originalPrice: 144.36, weight: "0.33 kg" },
      { name: "36 38 40 42", price: 111.50, originalPrice: 172.88, weight: "0.44 kg" },
      { name: "38 40 42", price: 92.25, originalPrice: 151.20, weight: "0.33 kg" },
      { name: "38 40 42 44", price: 118.57, originalPrice: 215.54, weight: "0.44 kg" },
      { name: "40 42 44", price: 110.44, originalPrice: 185.81, weight: "0.33 kg" },
      { name: "20 20 20", price: 51.40, originalPrice: 86.61, weight: "0.33 kg" },
      { name: "20 20 20 20", price: 64.14, originalPrice: 102.93, weight: "0.44 kg" },
      { name: "22 22 22", price: 54.42, originalPrice: 88.89, weight: "0.33 kg" },
      { name: "22 22 22 22", price: 69.10, originalPrice: 136.01, weight: "0.44 kg" }
    ]
  },
    "wigs-13": {
    id: "wigs-13",
    category: "wig",
    subCategory: "100%", // 子类目: 100% 系列
    name: '30 34 Inch 15A 100% human hair Long Bone Straight  Human Hair Bundles - Real Virgin  Hair Extensions, Double Weft Soft Smooth Weaving Bundles For Women',
    description: "Crafted from 70% premium Brazilian human hair, this wig offers unmatched softness and natural",
    density: "Bundle-FTST", // 假发专属属性: 密度
    laceArea: "1/3/4", // 假发专属属性: 蕾丝面积
    images: [
      "../images/wig-p13/p1.jpg",
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
    ]
  },
  "wigs-3": {
    id: "wigs-3",
    category: "wig",
    subCategory: "70%", // 子类目: 100% 系列
    name: 'Unprocessed Brazilian Virgin Hair 4 Bundles Straight Human Hair 16 18 20 22 Inch - Double Weft Thick Weave Bundle Extensions For Women Natural Black Color',
    description: "Crafted from 70% premium Brazilian human hair, this wig offers unmatched softness and natural",
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
      { name: "8 Inch", price: 14.00, originalPrice: 27.30, weight: "0.11 kg" },
      { name: "10 Inch", price: 16.00, originalPrice: 28.69, weight: "0.11 kg" },
      { name: "12 Inch", price: 17.00, originalPrice: 29.56, weight: "0.11 kg" },
      { name: "14 Inch", price: 22.53, originalPrice: 36.31, weight: "0.11 kg" },
      { name: "16 Inch", price: 24.70, originalPrice: 46.41, weight: "0.11 kg" },
      { name: "18 Inch", price: 23.95, originalPrice: 44.03, weight: "0.11 kg" },
      { name: "20 Inch", price: 24.11, originalPrice: 46.92, weight: "0.11 kg" },
      { name: "22 Inch", price: 24.31, originalPrice: 42.52, weight: "0.11 kg" },
      { name: "24 Inch", price: 25.55, originalPrice: 43.72, weight: "0.11 kg" },
      { name: "26 Inch", price: 26.83, originalPrice: 40.64, weight: "0.11 kg" },
      { name: "28 Inch", price: 35.90, originalPrice: 57.77, weight: "0.11 kg" },
      { name: "30 Inch", price: 35.46, originalPrice: 62.15, weight: "0.11 kg" },
      { name: "32 Inch", price: 35.60, originalPrice: 65.98, weight: "0.11 kg" },
      { name: "34 Inch", price: 34.75, originalPrice: 55.58, weight: "0.11 kg" },
      { name: "36 Inch", price: 38.50, originalPrice: 64.79, weight: "0.11 kg" },
      { name: "38 Inch", price: 41.28, originalPrice: 73.17, weight: "0.11 kg" },
      { name: "40 Inch", price: 50.13, originalPrice: 75.89, weight: "0.11 kg" },
      { name: "42 Inch", price: 49.19, originalPrice: 86.48, weight: "0.11 kg" },
      { name: "44 Inch", price: 51.13, originalPrice: 97.39, weight: "0.11 kg" },
      { name: "10 12 14", price: 35.19, originalPrice: 52.90, weight: "0.33 kg" },
      { name: "10 12 14 16", price: 47.88, originalPrice: 91.11, weight: "0.44 kg" },
      { name: "12 14 16", price: 38.96, originalPrice: 72.04, weight: "0.33 kg" },
      { name: "12 14 16 18", price: 50.94, originalPrice: 85.08, weight: "0.44 kg" },
      { name: "14 16 18", price: 43.19, originalPrice: 68.14, weight: "0.33 kg" },
      { name: "14 16 18 20", price: 53.95, originalPrice: 106.75, weight: "0.44 kg" },
      { name: "16 18 20", price: 50.50, originalPrice: 77.58, weight: "0.33 kg" },
      { name: "16 18 20 22", price: 57.65, originalPrice: 89.15, weight: "0.44 kg" },
      { name: "18 20 22", price: 50.01, originalPrice: 77.43, weight: "0.33 kg" },
      { name: "18 20 22 24", price: 61.62, originalPrice: 118.54, weight: "0.44 kg" },
      { name: "20 22 24", price: 56.41, originalPrice: 94.44, weight: "0.33 kg" },
      { name: "20 22 24 26", price: 65.46, originalPrice: 124.61, weight: "0.44 kg" },
      { name: "22 24 26", price: 56.80, originalPrice: 105.92, weight: "0.33 kg" },
      { name: "22 24 26 28", price: 70.50, originalPrice: 124.65, weight: "0.44 kg" },
      { name: "24 26 28", price: 62.00, originalPrice: 119.19, weight: "0.33 kg" },
      { name: "24 26 28 30", price: 75.00, originalPrice: 126.70, weight: "0.44 kg" },
      { name: "26 28 30", price: 63.33, originalPrice: 112.48, weight: "0.33 kg" },
      { name: "26 28 30 32", price: 88.57, originalPrice: 154.27, weight: "0.44 kg" },
      { name: "28 30 32", price: 66.29, originalPrice: 119.94, weight: "0.33 kg" },
      { name: "28 30 32 34", price: 90.29, originalPrice: 162.75, weight: "0.44 kg" },
      { name: "30 32 34", price: 69.00, originalPrice: 123.42, weight: "0.33 kg" },
      { name: "30 32 34 36", price: 89.94, originalPrice: 166.59, weight: "0.44 kg" },
      { name: "32 34 36", price: 90.35, originalPrice: 137.60, weight: "0.33 kg" },
      { name: "32 34 36 38", price: 96.78, originalPrice: 156.20, weight: "0.44 kg" },
      { name: "34 36 38", price: 95.37, originalPrice: 156.85, weight: "0.33 kg" },
      { name: "34 36 38 40", price: 104.50, originalPrice: 160.92, weight: "0.44 kg" },
      { name: "36 38 40", price: 89.31, originalPrice: 144.36, weight: "0.33 kg" },
      { name: "36 38 40 42", price: 111.50, originalPrice: 172.88, weight: "0.44 kg" },
      { name: "38 40 42", price: 92.25, originalPrice: 151.20, weight: "0.33 kg" },
      { name: "38 40 42 44", price: 118.57, originalPrice: 215.54, weight: "0.44 kg" },
      { name: "40 42 44", price: 110.44, originalPrice: 185.81, weight: "0.33 kg" },
      { name: "20 20 20", price: 51.40, originalPrice: 86.61, weight: "0.33 kg" },
      { name: "20 20 20 20", price: 64.14, originalPrice: 102.93, weight: "0.44 kg" },
      { name: "22 22 22", price: 54.42, originalPrice: 88.89, weight: "0.33 kg" },
      { name: "22 22 22 22", price: 69.10, originalPrice: 136.01, weight: "0.44 kg" }
    ]
  },
  "wigs-4": {
    id: "wigs-4",
    category: "wig",
    subCategory: "70%", // 子类目: 100% 系列
    name: 'Glueless Bob Wig Human Hair Pre Plucked Pre Cut 6x4/13X4 HD Lace Closure Wigs Human Hair 180% Density Wear and Go Short Straight Bob Wigs for Women 12 Inch',
    description: "Crafted from 70% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
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
      { name: "8 Inch", price: 35.63, originalPrice: 64.84, weight: "0.18 kg" },
      { name: "10 Inch", price: 35.56, originalPrice: 53.78, weight: "0.18 kg" },
      { name: "12 Inch", price: 36.00, originalPrice: 58.95, weight: "0.18 kg" },
      { name: "14 Inch", price: 36.00, originalPrice: 58.02, weight: "0.18 kg" },
      { name: "16 Inch", price: 36.00, originalPrice: 67.26, weight: "0.18 kg" },
      { name: "18 Inch", price: 43.99, originalPrice: 80.87, weight: "0.18 kg" },
      { name: "20 Inch", price: 46.99, originalPrice: 91.45, weight: "0.18 kg" },
      { name: "22 Inch", price: 51.67, originalPrice: 79.75, weight: "0.18 kg" },
      { name: "24 Inch", price: 58.15, originalPrice: 99.49, weight: "0.20 kg" },
      { name: "26 Inch", price: 59.97, originalPrice: 90.85, weight: "0.20 kg" },
      { name: "28 Inch", price: 61.76, originalPrice: 99.39, weight: "0.22 kg" },
      { name: "30 Inch", price: 65.94, originalPrice: 115.57, weight: "0.23 kg" },
      { name: "32 Inch", price: 73.24, originalPrice: 110.83, weight: "0.25 kg" },
      { name: "34 Inch", price: 80.90, originalPrice: 129.39, weight: "0.27 kg" },
      { name: "36 Inch", price: 84.47, originalPrice: 154.15, weight: "0.28 kg" },
      { name: "38 Inch", price: 88.21, originalPrice: 156.35, weight: "0.29 kg" },
      { name: "40 Inch", price: 94.39, originalPrice: 151.99, weight: "0.30 kg" },
      { name: "42 Inch", price: 123.98, originalPrice: 222.50, weight: "0.32 kg" }
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
    subCategory: "70%", // 子类目: 100% 系列
    name: '180 Density 16 inch Curly Short Bob Lace Front Human Hair Wigs For Women Depp Wave 13x4 HD Transparent Brazilian Lace Frontal Wig Closure Swiss Lace Wig Water Wave Pre Plucked',
    description: "Crafted from 70% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
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
      { name: "8 Inch", price: 37.77, originalPrice: 64.28, weight: "0.18 kg" },
      { name: "10 Inch", price: 38.15, originalPrice: 61.04, weight: "0.18 kg" },
      { name: "12 Inch", price: 38.25, originalPrice: 60.79, weight: "0.18 kg" },
      { name: "14 Inch", price: 37.82, originalPrice: 61.43, weight: "0.18 kg" },
      { name: "16 Inch", price: 39.71, originalPrice: 74.65, weight: "0.18 kg" },
      { name: "18 Inch", price: 46.13, originalPrice: 74.99, weight: "0.18 kg" },
      { name: "20 Inch", price: 56.43, originalPrice: 95.45, weight: "0.18 kg" },
      { name: "22 Inch", price: 59.89, originalPrice: 110.33, weight: "0.18 kg" },
      { name: "24 Inch", price: 61.06, originalPrice: 108.03, weight: "0.20 kg" },
      { name: "26 Inch", price: 63.14, originalPrice: 124.33, weight: "0.20 kg" },
      { name: "28 Inch", price: 65.87, originalPrice: 114.92, weight: "0.22 kg" },
      { name: "30 Inch", price: 71.58, originalPrice: 122.46, weight: "0.23 kg" },
      { name: "32 Inch", price: 80.95, originalPrice: 146.24, weight: "0.25 kg" },
      { name: "34 Inch", price: 86.27, originalPrice: 138.75, weight: "0.27 kg" },
      { name: "36 Inch", price: 95.61, originalPrice: 186.54, weight: "0.28 kg" },
      { name: "38 Inch", price: 97.44, originalPrice: 164.38, weight: "0.29 kg" },
      { name: "40 Inch", price: 106.61, originalPrice: 180.60, weight: "0.30 kg" },
      { name: "42 Inch", price: 119.84, originalPrice: 220.65, weight: "0.32 kg" }
    ]
  },
  "wigs-7": {
    id: "wigs-7",
    category: "wig",
    subCategory: "70%", // 子类目: 100% 系列
    name: '13x4 Lace Front Wigs Human Hair Pre Plucked Brazilian Wet and Wavy Human Hair Wigs for Women Curly Wave Lace Frontal Wig Natural Color (28 Inch)',
    description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
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
      { name: "8 Inch", price: 32.07, originalPrice: 64.28, weight: "0.18 kg" },
      { name: "10 Inch", price: 33.15, originalPrice: 61.04, weight: "0.18 kg" },
      { name: "12 Inch", price: 38.25, originalPrice: 60.79, weight: "0.18 kg" },
      { name: "14 Inch", price: 37.82, originalPrice: 61.43, weight: "0.18 kg" },
      { name: "16 Inch", price: 39.71, originalPrice: 74.65, weight: "0.18 kg" },
      { name: "18 Inch", price: 46.13, originalPrice: 74.99, weight: "0.18 kg" },
      { name: "20 Inch", price: 49.43, originalPrice: 95.45, weight: "0.18 kg" },
      { name: "22 Inch", price: 55.89, originalPrice: 110.33, weight: "0.18 kg" },
      { name: "24 Inch", price: 61.06, originalPrice: 108.03, weight: "0.20 kg" },
      { name: "26 Inch", price: 63.14, originalPrice: 124.33, weight: "0.20 kg" },
      { name: "28 Inch", price: 65.87, originalPrice: 114.92, weight: "0.22 kg" },
      { name: "30 Inch", price: 71.58, originalPrice: 122.46, weight: "0.23 kg" },
      { name: "32 Inch", price: 80.95, originalPrice: 146.24, weight: "0.25 kg" },
      { name: "34 Inch", price: 86.27, originalPrice: 138.75, weight: "0.27 kg" },
      { name: "36 Inch", price: 95.61, originalPrice: 186.54, weight: "0.28 kg" },
      { name: "38 Inch", price: 97.44, originalPrice: 164.38, weight: "0.29 kg" },
      { name: "40 Inch", price: 106.61, originalPrice: 180.60, weight: "0.30 kg" },
      { name: "42 Inch", price: 119.84, originalPrice: 220.65, weight: "0.32 kg" }
    ]
  },
  "wigs-8": {
    id: "wigs-8",
    category: "wig",
    subCategory: "70%", // 子类目: 100% 系列
    name: '15A Brazilian Straight Human Hair Bundles 26 28 30 32Inch 100% Unprocessed Virgin Straight Weave 4 Bundles Human Hair',
    description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
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
      { name: "8 Inch", price: 12.00, originalPrice: 22.89, weight: "0.11 kg" },
      { name: "10 Inch", price: 12.50, originalPrice: 23.15, weight: "0.11 kg" },
      { name: "12 Inch", price: 13.00, originalPrice: 25.55, weight: "0.11 kg" },
      { name: "14 Inch", price: 20.50, originalPrice: 31.85, weight: "0.11 kg" },
      { name: "16 Inch", price: 19.90, originalPrice: 38.82, weight: "0.11 kg" },
      { name: "18 Inch", price: 20.35, originalPrice: 30.91, weight: "0.11 kg" },
      { name: "20 Inch", price: 21.70, originalPrice: 38.37, weight: "0.11 kg" },
      { name: "22 Inch", price: 23.13, originalPrice: 38.54, weight: "0.11 kg" },
      { name: "24 Inch", price: 24.63, originalPrice: 47.44, weight: "0.11 kg" },
      { name: "26 Inch", price: 26.20, originalPrice: 41.39, weight: "0.11 kg" },
      { name: "28 Inch", price: 29.13, originalPrice: 48.61, weight: "0.11 kg" },
      { name: "30 Inch", price: 30.70, originalPrice: 51.17, weight: "0.11 kg" },
      { name: "32 Inch", price: 34.00, originalPrice: 55.17, weight: "0.11 kg" },
      { name: "34 Inch", price: 34.75, originalPrice: 52.15, weight: "0.11 kg" },
      { name: "36 Inch", price: 35.50, originalPrice: 60.99, weight: "0.11 kg" },
      { name: "38 Inch", price: 41.28, originalPrice: 63.73, weight: "0.11 kg" },
      { name: "40 Inch", price: 47.13, originalPrice: 84.78, weight: "0.11 kg" },
      { name: "42 Inch", price: 48.19, originalPrice: 73.97, weight: "0.11 kg" },
      { name: "44 Inch", price: 51.13, originalPrice: 84.76, weight: "0.11 kg" },
      { name: "10 12 14", price: 35.20, originalPrice: 60.69, weight: "0.33 kg" },
      { name: "10 12 14 16", price: 47.88, originalPrice: 93.50, weight: "0.44 kg" },
      { name: "12 14 16", price: 37.22, originalPrice: 57.56, weight: "0.33 kg" },
      { name: "12 14 16 18", price: 50.94, originalPrice: 80.03, weight: "0.44 kg" },
      { name: "14 16 18", price: 43.19, originalPrice: 81.85, weight: "0.33 kg" },
      { name: "14 16 18 20", price: 53.95, originalPrice: 81.50, weight: "0.44 kg" },
      { name: "16 18 20", price: 46.50, originalPrice: 90.93, weight: "0.33 kg" },
      { name: "16 18 20 22", price: 57.88, originalPrice: 103.41, weight: "0.44 kg" },
      { name: "18 20 22", price: 49.49, originalPrice: 80.80, weight: "0.33 kg" },
      { name: "18 20 22 24", price: 61.70, originalPrice: 118.40, weight: "0.44 kg" },
      { name: "20 22 24", price: 52.41, originalPrice: 98.76, weight: "0.33 kg" },
      { name: "20 22 24 26", price: 65.23, originalPrice: 109.05, weight: "0.44 kg" },
      { name: "22 24 26", price: 55.50, originalPrice: 105.49, weight: "0.33 kg" },
      { name: "22 24 26 28", price: 70.54, originalPrice: 113.11, weight: "0.44 kg" },
      { name: "24 26 28", price: 59.63, originalPrice: 107.60, weight: "0.33 kg" },
      { name: "24 26 28 30", price: 75.57, originalPrice: 133.27, weight: "0.44 kg" },
      { name: "26 28 30", price: 63.77, originalPrice: 121.46, weight: "0.33 kg" },
      { name: "26 28 30 32", price: 80.31, originalPrice: 133.12, weight: "0.44 kg" },
      { name: "28 30 32", price: 66.59, originalPrice: 113.14, weight: "0.33 kg" },
      { name: "28 30 32 34", price: 84.78, originalPrice: 159.78, weight: "0.44 kg" },
      { name: "30 32 34", price: 69.22, originalPrice: 121.58, weight: "0.33 kg" },
      { name: "30 32 34 36", price: 90.84, originalPrice: 167.37, weight: "0.44 kg" },
      { name: "32 34 36", price: 77.68, originalPrice: 141.31, weight: "0.33 kg" },
      { name: "32 34 36 38", price: 96.13, originalPrice: 176.24, weight: "0.44 kg" },
      { name: "34 36 38", price: 83.51, originalPrice: 162.43, weight: "0.33 kg" },
      { name: "34 36 38 40", price: 104.50, originalPrice: 182.15, weight: "0.44 kg" },
      { name: "36 38 40", price: 86.14, originalPrice: 158.00, weight: "0.33 kg" },
      { name: "36 38 40 42", price: 111.25, originalPrice: 187.71, weight: "0.44 kg" },
      { name: "38 40 42", price: 92.25, originalPrice: 139.84, weight: "0.33 kg" },
      { name: "38 40 42 44", price: 116.00, originalPrice: 217.74, weight: "0.44 kg" },
      { name: "40 42 44", price: 95.19, originalPrice: 151.42, weight: "0.33 kg" },
      { name: "20 20 20", price: 51.40, originalPrice: 98.18, weight: "0.33 kg" },
      { name: "20 20 20 20", price: 64.14, originalPrice: 125.51, weight: "0.44 kg" },
      { name: "22 22 22", price: 54.42, originalPrice: 99.54, weight: "0.33 kg" },
      { name: "22 22 22 22", price: 69.10, originalPrice: 109.53, weight: "0.44 kg" }
    ]
  },
  "wigs-9": {
    id: "wigs-9",
    category: "wig",
    subCategory: "70%", // 子类目: 100% 系列
    name: '15A Brazilian Straight Human Hair 4 Bundles 26 28 30 32 Inch Straight Bundles Human Hair Unprocessed Virgin Hair Weave Bundles Hair Black',
    description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
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
      { name: "8 Inch", price: 9.00, originalPrice: 22.89, weight: "0.11 kg" },
      { name: "10 Inch", price: 15.00, originalPrice: 23.15, weight: "0.11 kg" },
      { name: "12 Inch", price: 16.00, originalPrice: 25.55, weight: "0.11 kg" },
      { name: "14 Inch", price: 20.50, originalPrice: 31.85, weight: "0.11 kg" },
      { name: "16 Inch", price: 19.90, originalPrice: 38.82, weight: "0.11 kg" },
      { name: "18 Inch", price: 20.35, originalPrice: 30.91, weight: "0.11 kg" },
      { name: "20 Inch", price: 21.70, originalPrice: 38.37, weight: "0.11 kg" },
      { name: "22 Inch", price: 23.13, originalPrice: 38.54, weight: "0.11 kg" },
      { name: "24 Inch", price: 24.63, originalPrice: 47.44, weight: "0.11 kg" },
      { name: "26 Inch", price: 26.20, originalPrice: 41.39, weight: "0.11 kg" },
      { name: "28 Inch", price: 29.13, originalPrice: 48.61, weight: "0.11 kg" },
      { name: "30 Inch", price: 30.70, originalPrice: 51.17, weight: "0.11 kg" },
      { name: "32 Inch", price: 33.00, originalPrice: 55.17, weight: "0.11 kg" },
      { name: "34 Inch", price: 34.75, originalPrice: 52.15, weight: "0.11 kg" },
      { name: "36 Inch", price: 35.50, originalPrice: 60.99, weight: "0.11 kg" },
      { name: "38 Inch", price: 41.28, originalPrice: 63.73, weight: "0.11 kg" },
      { name: "40 Inch", price: 47.13, originalPrice: 84.78, weight: "0.11 kg" },
      { name: "42 Inch", price: 48.19, originalPrice: 73.97, weight: "0.11 kg" },
      { name: "44 Inch", price: 50.13, originalPrice: 84.76, weight: "0.11 kg" },
      { name: "10 12 14", price: 35.20, originalPrice: 60.69, weight: "0.33 kg" },
      { name: "10 12 14 16", price: 47.88, originalPrice: 93.50, weight: "0.44 kg" },
      { name: "12 14 16", price: 37.22, originalPrice: 57.56, weight: "0.33 kg" },
      { name: "12 14 16 18", price: 50.94, originalPrice: 80.03, weight: "0.44 kg" },
      { name: "14 16 18", price: 43.19, originalPrice: 81.85, weight: "0.33 kg" },
      { name: "14 16 18 20", price: 53.95, originalPrice: 81.50, weight: "0.44 kg" },
      { name: "16 18 20", price: 46.50, originalPrice: 90.93, weight: "0.33 kg" },
      { name: "16 18 20 22", price: 57.88, originalPrice: 103.41, weight: "0.44 kg" },
      { name: "18 20 22", price: 49.49, originalPrice: 80.80, weight: "0.33 kg" },
      { name: "18 20 22 24", price: 61.70, originalPrice: 118.40, weight: "0.44 kg" },
      { name: "20 22 24", price: 52.41, originalPrice: 98.76, weight: "0.33 kg" },
      { name: "20 22 24 26", price: 65.23, originalPrice: 109.05, weight: "0.44 kg" },
      { name: "22 24 26", price: 55.50, originalPrice: 105.49, weight: "0.33 kg" },
      { name: "22 24 26 28", price: 70.54, originalPrice: 113.11, weight: "0.44 kg" },
      { name: "24 26 28", price: 59.63, originalPrice: 107.60, weight: "0.33 kg" },
      { name: "24 26 28 30", price: 75.57, originalPrice: 133.27, weight: "0.44 kg" },
      { name: "26 28 30", price: 63.77, originalPrice: 121.46, weight: "0.33 kg" },
      { name: "26 28 30 32", price: 80.31, originalPrice: 133.12, weight: "0.44 kg" },
      { name: "28 30 32", price: 66.59, originalPrice: 113.14, weight: "0.33 kg" },
      { name: "28 30 32 34", price: 84.78, originalPrice: 159.78, weight: "0.44 kg" },
      { name: "30 32 34", price: 69.22, originalPrice: 121.58, weight: "0.33 kg" },
      { name: "30 32 34 36", price: 90.84, originalPrice: 167.37, weight: "0.44 kg" },
      { name: "32 34 36", price: 77.68, originalPrice: 141.31, weight: "0.33 kg" },
      { name: "32 34 36 38", price: 96.13, originalPrice: 176.24, weight: "0.44 kg" },
      { name: "34 36 38", price: 83.51, originalPrice: 162.43, weight: "0.33 kg" },
      { name: "34 36 38 40", price: 104.50, originalPrice: 182.15, weight: "0.44 kg" },
      { name: "36 38 40", price: 86.14, originalPrice: 158.00, weight: "0.33 kg" },
      { name: "36 38 40 42", price: 111.25, originalPrice: 187.71, weight: "0.44 kg" },
      { name: "38 40 42", price: 92.25, originalPrice: 139.84, weight: "0.33 kg" },
      { name: "38 40 42 44", price: 116.00, originalPrice: 217.74, weight: "0.44 kg" },
      { name: "40 42 44", price: 95.19, originalPrice: 151.42, weight: "0.33 kg" },
      { name: "20 20 20", price: 51.40, originalPrice: 98.18, weight: "0.33 kg" },
      { name: "20 20 20 20", price: 64.14, originalPrice: 125.51, weight: "0.44 kg" },
      { name: "22 22 22", price: 54.42, originalPrice: 99.54, weight: "0.33 kg" },
      { name: "22 22 22 22", price: 69.10, originalPrice: 109.53, weight: "0.44 kg" }
    ]
  },
  "wigs-10": {
    id: "wigs-10",
    category: "wig",
    subCategory: "70%", // 子类目: 100% 系列
    name: 'Burgundy 99 with 99J Highlight Red Colored 13X4 Lace Closure Wig Body Wave Pre-Plucked 13x4 Lace Front Human Hair Wig',
    description: "Crafted from 100% premium Brazilian human hair, this wig offers unmatched softness and a natural hairline.",
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
      { name: "8 Inch", price: 36.23, originalPrice: 61.18, weight: "0.18 kg" },
      { name: "10 Inch", price: 39.70, originalPrice: 71.28, weight: "0.18 kg" },
      { name: "12 Inch", price: 40.43, originalPrice: 70.99, weight: "0.18 kg" },
      { name: "14 Inch", price: 42.92, originalPrice: 82.84, weight: "0.18 kg" },
      { name: "16 Inch", price: 51.22, originalPrice: 79.46, weight: "0.18 kg" },
      { name: "18 Inch", price: 58.28, originalPrice: 93.93, weight: "0.18 kg" },
      { name: "20 Inch", price: 60.80, originalPrice: 109.47, weight: "0.18 kg" },
      { name: "22 Inch", price: 63.74, originalPrice: 113.35, weight: "0.18 kg" },
      { name: "24 Inch", price: 68.31, originalPrice: 129.22, weight: "0.20 kg" },
      { name: "26 Inch", price: 68.47, originalPrice: 121.46, weight: "0.20 kg" },
      { name: "28 Inch", price: 70.82, originalPrice: 132.10, weight: "0.22 kg" },
      { name: "30 Inch", price: 76.59, originalPrice: 144.30, weight: "0.23 kg" },
      { name: "32 Inch", price: 84.20, originalPrice: 157.92, weight: "0.25 kg" },
      { name: "34 Inch", price: 90.75, originalPrice: 162.74, weight: "0.27 kg" },
      { name: "36 Inch", price: 100.30, originalPrice: 162.48, weight: "0.28 kg" },
      { name: "38 Inch", price: 105.54, originalPrice: 190.72, weight: "0.29 kg" },
      { name: "40 Inch", price: 119.83, originalPrice: 186.38, weight: "0.30 kg" },
      { name: "42 Inch", price: 126.72, originalPrice: 241.83, weight: "0.32 kg" }
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
const bestSellerIds = ["wigs-1", "wigs-3", "grocery-1"]; 

// 2. 提供一个获取畅销商品的辅助函数
function getBestSellers() {
    const all = Object.values(productDatabase);
    // 过滤出 ID 存在于 bestSellerIds 数组中的商品
    return all.filter(p => bestSellerIds.includes(p.id));
}
