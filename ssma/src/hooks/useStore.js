import { useState, useEffect } from "react";

// Initialize data from localStorage or default data
const defaultData = {
  products: [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      category: "Áo",
      sizes: [
        { size: "S", quantity: 2, sold: 0 },
        { size: "M", quantity: 3, sold: 1 },
        { size: "L", quantity: 1, sold: 0 },
      ],
      costPrice: 250000,
      sellingPrice: 450000,
      dateAdded: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      status: "Còn hàng",
      notes: "Áo khoác denim vintage",
    },
    {
      id: 2,
      name: "Baggy Cargo Pants",
      category: "Quần",
      sizes: [
        { size: "S", quantity: 1, sold: 2 },
        { size: "M", quantity: 2, sold: 1 },
        { size: "L", quantity: 2, sold: 0 },
      ],
      costPrice: 180000,
      sellingPrice: 380000,
      dateAdded: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      status: "Còn hàng",
      notes: "Quần baggy cargo kiểu streetwear",
    },
    {
      id: 3,
      name: "Stressmama Logo Cap",
      category: "Phụ kiện",
      sizes: [{ size: "Freesize", quantity: 5, sold: 3 }],
      costPrice: 75000,
      sellingPrice: 180000,
      dateAdded: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      status: "Còn hàng",
      notes: "Nón cap Stressmama",
    },
  ],
};

export const useStore = () => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("ssma_products");
    console.log(
      "🔄 Loading from localStorage...",
      saved ? "✅ Found data" : "❌ No data, using default",
    );
    return saved ? JSON.parse(saved) : defaultData.products;
  });

  // Save to localStorage whenever products change
  useEffect(() => {
    console.log("💾 Saving to localStorage:", products.length, "products");
    try {
      localStorage.setItem("ssma_products", JSON.stringify(products));
      console.log("✅ Saved successfully");
    } catch (error) {
      console.error("❌ Error saving to localStorage:", error);
    }
  }, [products]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map((p) => p.id), 0) + 1,
      dateAdded: new Date().toISOString().split("T")[0],
      status: "Còn hàng",
    };
    setProducts([...products, newProduct]);
    return newProduct.id;
  };

  const updateProduct = (id, updates) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const markSold = (productId, sizeIndex, quantity = 1) => {
    setProducts(
      products.map((p) => {
        if (p.id === productId) {
          const newSizes = [...p.sizes];
          newSizes[sizeIndex] = {
            ...newSizes[sizeIndex],
            quantity: Math.max(0, newSizes[sizeIndex].quantity - quantity),
            sold: newSizes[sizeIndex].sold + quantity,
          };
          return { ...p, sizes: newSizes };
        }
        return p;
      }),
    );
  };

  // Financial calculations
  const calculateMetrics = () => {
    let totalCost = 0;
    let totalRevenue = 0;
    let totalProfit = 0;
    const categoryStats = {
      Áo: { sold: 0, profit: 0, cost: 0, revenue: 0 },
      Quần: { sold: 0, profit: 0, cost: 0, revenue: 0 },
      "Phụ kiện": { sold: 0, profit: 0, cost: 0, revenue: 0 },
    };

    products.forEach((product) => {
      const totalSold = product.sizes.reduce((sum, s) => sum + s.sold, 0);
      const profit = (product.sellingPrice - product.costPrice) * totalSold;
      const revenue = product.sellingPrice * totalSold;
      const cost = product.costPrice * totalSold;

      totalCost += cost;
      totalRevenue += revenue;
      totalProfit += profit;

      categoryStats[product.category].sold += totalSold;
      categoryStats[product.category].profit += profit;
      categoryStats[product.category].cost += cost;
      categoryStats[product.category].revenue += revenue;
    });

    return {
      totalCost,
      totalRevenue,
      totalProfit,
      categoryStats,
      profitMargin:
        totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(2) : 0,
    };
  };

  // Get inventory age warnings
  const getInventoryWarnings = () => {
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    return products.filter((product) => {
      const addedDate = new Date(product.dateAdded);
      const totalQuantity = product.sizes.reduce(
        (sum, s) => sum + s.quantity,
        0,
      );
      return addedDate < thirtyDaysAgo && totalQuantity > 0;
    });
  };

  // Get timeline data for charts
  const getTimelineData = () => {
    const timeline = {};

    products.forEach((product) => {
      const date = product.dateAdded;
      if (!timeline[date]) {
        timeline[date] = { date, revenue: 0, profit: 0, cost: 0 };
      }
      const totalSold = product.sizes.reduce((sum, s) => sum + s.sold, 0);
      timeline[date].revenue += product.sellingPrice * totalSold;
      timeline[date].profit +=
        (product.sellingPrice - product.costPrice) * totalSold;
      timeline[date].cost += product.costPrice * totalSold;
    });

    return Object.values(timeline)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((item) => ({
        ...item,
        date: new Date(item.date).toLocaleDateString("vi-VN"),
      }));
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    markSold,
    calculateMetrics,
    getInventoryWarnings,
    getTimelineData,
  };
};
