import React, { useState } from "react";
import { Package, Plus, BarChart3, Settings } from "lucide-react";
import { useStore } from "./hooks/useStore";
import { Dashboard } from "./components/Dashboard";
import { ProductList } from "./components/ProductList";
import { ProductForm } from "./components/ProductForm";
import { Analytics } from "./components/Analytics";

function App() {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    markSold,
    calculateMetrics,
    getInventoryWarnings,
    getTimelineData,
  } = useStore();

  const metrics = calculateMetrics();
  const warnings = getInventoryWarnings();
  const timelineData = getTimelineData();

  const handleAddProduct = (formData) => {
    addProduct(formData);
    setShowForm(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleUpdateProduct = (formData) => {
    updateProduct(editingProduct.id, formData);
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleFormSubmit = (formData) => {
    if (editingProduct) {
      handleUpdateProduct(formData);
    } else {
      handleAddProduct(formData);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className='min-h-screen bg-gray-950'>
      {/* Header */}
      <header className='bg-gray-900 border-b border-gray-800 sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg'>
                <Package className='w-6 h-6 text-white' />
              </div>
              <div>
                <h1 className='text-2xl font-bold text-white'>STRESSMAMA</h1>
                <p className='text-xs text-gray-400'>
                  Hệ thống quản lý bán hàng & kho
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium'
            >
              <Plus className='w-5 h-5' />
              Thêm sản phẩm
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className='flex gap-1 mt-4 border-b border-gray-800'>
            <button
              onClick={() => {
                setCurrentTab("dashboard");
                setShowForm(false);
              }}
              className={`px-4 py-2 font-medium transition border-b-2 ${
                currentTab === "dashboard"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              <span className='flex items-center gap-2'>
                <BarChart3 className='w-4 h-4' />
                Tổng quan
              </span>
            </button>
            <button
              onClick={() => {
                setCurrentTab("products");
                setShowForm(false);
              }}
              className={`px-4 py-2 font-medium transition border-b-2 ${
                currentTab === "products"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              <span className='flex items-center gap-2'>
                <Package className='w-4 h-4' />
                Kho hàng ({products.length})
              </span>
            </button>
            <button
              onClick={() => {
                setCurrentTab("analytics");
                setShowForm(false);
              }}
              className={`px-4 py-2 font-medium transition border-b-2 ${
                currentTab === "analytics"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              <span className='flex items-center gap-2'>
                <BarChart3 className='w-4 h-4' />
                Phân tích
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Form Modal */}
        {showForm && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
            <div className='bg-gray-800 rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto border border-gray-700'>
              <div className='sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between'>
                <h2 className='text-xl font-bold text-white'>
                  {editingProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}
                </h2>
                <button
                  onClick={handleFormCancel}
                  className='text-gray-400 hover:text-white transition'
                >
                  ✕
                </button>
              </div>
              <div className='p-6'>
                <ProductForm
                  onSubmit={handleFormSubmit}
                  onCancel={handleFormCancel}
                  initialProduct={editingProduct}
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab Content */}
        {currentTab === "dashboard" && !showForm && (
          <Dashboard metrics={metrics} warnings={warnings} />
        )}

        {currentTab === "products" && !showForm && (
          <div>
            <h2 className='text-2xl font-bold text-white mb-6'>
              Quản lý sản phẩm
            </h2>
            <ProductList
              products={products}
              onEdit={handleEditProduct}
              onDelete={deleteProduct}
              onMarkSold={markSold}
            />
          </div>
        )}

        {currentTab === "analytics" && !showForm && (
          <div>
            <h2 className='text-2xl font-bold text-white mb-6'>
              Phân tích tài chính
            </h2>
            <Analytics
              timelineData={timelineData}
              categoryStats={metrics.categoryStats}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className='bg-gray-900 border-t border-gray-800 mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm'>
          <p>
            © 2026 STRESSMAMA. Secondhand Fashion Management System. Powered by
            React + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
