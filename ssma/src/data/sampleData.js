/**
 * Sample Data for STRESSMAMA
 * Use this to populate test data into your localStorage
 *
 * How to use:
 * 1. Copy this data
 * 2. Open browser DevTools (F12)
 * 3. Go to Console
 * 4. Paste this code:
 * localStorage.setItem('ssma_products', JSON.stringify(SAMPLE_DATA))
 * 5. Refresh the page
 */

export const SAMPLE_DATA = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    category: "Áo",
    sizes: [
      { size: "S", quantity: 2, sold: 3 },
      { size: "M", quantity: 3, sold: 5 },
      { size: "L", quantity: 1, sold: 2 },
    ],
    costPrice: 250000,
    sellingPrice: 450000,
    dateAdded: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Áo khoác denim vintage, tình trạng 9/10, size có hơi nhỏ",
  },
  {
    id: 2,
    name: "Baggy Cargo Pants",
    category: "Quần",
    sizes: [
      { size: "S", quantity: 1, sold: 5 },
      { size: "M", quantity: 2, sold: 7 },
      { size: "L", quantity: 2, sold: 3 },
    ],
    costPrice: 180000,
    sellingPrice: 380000,
    dateAdded: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Quần baggy cargo kiểu streetwear, rất trending",
  },
  {
    id: 3,
    name: "Stressmama Logo Cap",
    category: "Phụ kiện",
    sizes: [{ size: "Freesize", quantity: 5, sold: 8 }],
    costPrice: 75000,
    sellingPrice: 180000,
    dateAdded: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Nón cap Stressmama, hàng limited edition - CẢN BÁO XÁ KHO",
  },
  {
    id: 4,
    name: "Oversized Band Tee 90s",
    category: "Áo",
    sizes: [
      { size: "S", quantity: 0, sold: 4 },
      { size: "M", quantity: 1, sold: 6 },
      { size: "L", quantity: 3, sold: 2 },
      { size: "XL", quantity: 2, sold: 1 },
    ],
    costPrice: 120000,
    sellingPrice: 280000,
    dateAdded: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Band tee vintage 90s, oversized fit, rất được yêu thích",
  },
  {
    id: 5,
    name: "Y2K Low-Rise Jeans",
    category: "Quần",
    sizes: [
      { size: "S", quantity: 0, sold: 3 },
      { size: "M", quantity: 1, sold: 4 },
      { size: "L", quantity: 2, sold: 2 },
    ],
    costPrice: 200000,
    sellingPrice: 420000,
    dateAdded: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Y2K low-rise jeans, trend hiện tại, chất lượng tốt",
  },
  {
    id: 6,
    name: "Vintage Leather Belt",
    category: "Phụ kiện",
    sizes: [{ size: "Freesize", quantity: 3, sold: 5 }],
    costPrice: 150000,
    sellingPrice: 350000,
    dateAdded: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Thắt lưng da vintage, chất lượng cao, pattern độc đáo",
  },
  {
    id: 7,
    name: "Graphic Hoodie Streetwear",
    category: "Áo",
    sizes: [
      { size: "S", quantity: 2, sold: 6 },
      { size: "M", quantity: 0, sold: 8 },
      { size: "L", quantity: 1, sold: 4 },
      { size: "XL", quantity: 1, sold: 2 },
    ],
    costPrice: 280000,
    sellingPrice: 580000,
    dateAdded: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Hoodie streetwear với graphic độc đáo, tính lợi nhuận cao",
  },
  {
    id: 8,
    name: "Vintage Sunglasses",
    category: "Phụ kiện",
    sizes: [{ size: "Freesize", quantity: 8, sold: 2 }],
    costPrice: 50000,
    sellingPrice: 150000,
    dateAdded: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Kính mắt vintage, hàng tồn lâu, cần xả kho gấp - ĐỂ Ý",
  },
  {
    id: 9,
    name: "Ripped Mom Jeans",
    category: "Quần",
    sizes: [
      { size: "S", quantity: 1, sold: 2 },
      { size: "M", quantity: 3, sold: 4 },
      { size: "L", quantity: 2, sold: 1 },
    ],
    costPrice: 190000,
    sellingPrice: 420000,
    dateAdded: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Mom jeans ripped style, trending, chất lượng tốt",
  },
  {
    id: 10,
    name: "Chunky Sneakers",
    category: "Phụ kiện",
    sizes: [{ size: "Freesize", quantity: 0, sold: 6 }],
    costPrice: 350000,
    sellingPrice: 750000,
    dateAdded: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    status: "Còn hàng",
    notes: "Giày chunky sneakers, hết hàng, có demand cao",
  },
];

/**
 * Summary Statistics từ Sample Data:
 *
 * Total Products: 10
 * Total Items in Stock: 24
 * Total Items Sold: 52
 * Total Revenue: ~21,580,000 ₫
 * Total Cost: ~10,685,000 ₫
 * Total Profit: ~10,895,000 ₫
 * Profit Margin: ~50.5%
 *
 * Category Breakdown:
 * - Áo: 4 products, 21 sold, ~8,010,000 ₫ revenue
 * - Quần: 3 products, 15 sold, ~7,020,000 ₫ revenue
 * - Phụ kiện: 3 products, 16 sold, ~6,550,000 ₫ revenue
 *
 * Inventory Warnings:
 * - Stressmama Logo Cap (tồn 45 ngày)
 * - Vintage Sunglasses (tồn 60 ngày) - CẢNH BÁO GẤPC
 */

/**
 * How to Reset to Sample Data
 *
 * In Browser Console:
 *
 * Step 1: Clear current data
 * localStorage.removeItem('ssma_products');
 *
 * Step 2: Add sample data
 * const SAMPLE_DATA = [...] // copy from above
 * localStorage.setItem('ssma_products', JSON.stringify(SAMPLE_DATA));
 *
 * Step 3: Refresh page
 * location.reload();
 */
