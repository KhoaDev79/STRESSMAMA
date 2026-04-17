/**
 * Utility functions for formatting and calculations
 */

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calculateProfit = (costPrice, sellingPrice, quantity = 1) => {
  return (sellingPrice - costPrice) * quantity;
};

export const calculateProfitMargin = (profit, revenue) => {
  if (revenue === 0) return 0;
  return ((profit / revenue) * 100).toFixed(2);
};

export const getInventoryDays = (dateAdded) => {
  const today = new Date();
  const addedDate = new Date(dateAdded);
  const timeDiff = today.getTime() - addedDate.getTime();
  return Math.floor(timeDiff / (24 * 60 * 60 * 1000));
};

export const isInventoryOld = (dateAdded) => {
  return getInventoryDays(dateAdded) > 30;
};

export const getTotalInventoryValue = (costPrice, quantity) => {
  return costPrice * quantity;
};

export const calculateROI = (profit, totalCost) => {
  if (totalCost === 0) return 0;
  return ((profit / totalCost) * 100).toFixed(2);
};

// Category constants
export const CATEGORIES = {
  SHIRT: "Áo",
  PANTS: "Quần",
  ACCESSORIES: "Phụ kiện",
};

export const SIZES = ["S", "M", "L", "XL", "Freesize"];

// Status constants
export const STATUS = {
  IN_STOCK: "Còn hàng",
  SOLD_OUT: "Hết hàng",
  DISCONTINUED: "Ngừng bán",
};

/**
 * Sort products by category
 */
export const sortByCategory = (products, category) => {
  return products.filter((p) => p.category === category);
};

/**
 * Get products by inventory age
 */
export const getOldInventory = (products, days = 30) => {
  return products.filter(
    (product) => getInventoryDays(product.dateAdded) > days,
  );
};

/**
 * Get best selling products
 */
export const getBestSellers = (products, limit = 5) => {
  return products
    .map((p) => ({
      ...p,
      totalSold: p.sizes.reduce((sum, s) => sum + s.sold, 0),
    }))
    .sort((a, b) => b.totalSold - a.totalSold)
    .slice(0, limit);
};

/**
 * Get most profitable products
 */
export const getMostProfitable = (products, limit = 5) => {
  return products
    .map((p) => ({
      ...p,
      profit:
        (p.sellingPrice - p.costPrice) *
        p.sizes.reduce((sum, s) => sum + s.sold, 0),
    }))
    .sort((a, b) => b.profit - a.profit)
    .slice(0, limit);
};

/**
 * Calculate total inventory value
 */
export const getTotalInventoryValueAll = (products) => {
  return products.reduce((total, product) => {
    const totalQty = product.sizes.reduce((sum, s) => sum + s.quantity, 0);
    return total + product.costPrice * totalQty;
  }, 0);
};

/**
 * Get summary statistics
 */
export const getSummaryStats = (products) => {
  const totalProducts = products.length;
  const totalItems = products.reduce(
    (sum, p) => sum + p.sizes.reduce((s, sz) => s + sz.quantity, 0),
    0,
  );
  const totalSold = products.reduce(
    (sum, p) => sum + p.sizes.reduce((s, sz) => s + sz.sold, 0),
    0,
  );
  const oldInventory = getOldInventory(products).length;

  return {
    totalProducts,
    totalItems,
    totalSold,
    oldInventory,
    inventoryPercentage:
      totalItems > 0
        ? ((totalSold / (totalSold + totalItems)) * 100).toFixed(1)
        : 0,
  };
};
