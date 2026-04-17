import React from "react";
import { TrendingUp, Package, DollarSign, AlertTriangle } from "lucide-react";

export const Dashboard = ({ metrics, warnings }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className='space-y-6'>
      {/* Main KPIs */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Total Revenue */}
        <div className='bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 text-white shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-blue-200 text-sm font-medium mb-1'>
                Doanh thu
              </p>
              <h3 className='text-2xl font-bold'>
                {formatCurrency(metrics.totalRevenue)}
              </h3>
              <p className='text-blue-300 text-xs mt-2'>Tổng doanh thu</p>
            </div>
            <DollarSign className='w-12 h-12 text-blue-300 opacity-50' />
          </div>
        </div>

        {/* Total Cost */}
        <div className='bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-6 text-white shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-orange-200 text-sm font-medium mb-1'>
                Vốn đầu tư
              </p>
              <h3 className='text-2xl font-bold'>
                {formatCurrency(metrics.totalCost)}
              </h3>
              <p className='text-orange-300 text-xs mt-2'>Tổng giá vốn</p>
            </div>
            <Package className='w-12 h-12 text-orange-300 opacity-50' />
          </div>
        </div>

        {/* Total Profit */}
        <div className='bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6 text-white shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-green-200 text-sm font-medium mb-1'>
                Lợi nhuận
              </p>
              <h3 className='text-2xl font-bold'>
                {formatCurrency(metrics.totalProfit)}
              </h3>
              <p className='text-green-300 text-xs mt-2'>Lợi nhuận ròng</p>
            </div>
            <TrendingUp className='w-12 h-12 text-green-300 opacity-50' />
          </div>
        </div>

        {/* Profit Margin */}
        <div className='bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-6 text-white shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-purple-200 text-sm font-medium mb-1'>
                Tỷ suất lợi nhuận
              </p>
              <h3 className='text-2xl font-bold'>{metrics.profitMargin}%</h3>
              <p className='text-purple-300 text-xs mt-2'>ROI toàn bộ</p>
            </div>
            <TrendingUp className='w-12 h-12 text-purple-300 opacity-50' />
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
        <h2 className='text-xl font-bold text-white mb-4'>
          Hiệu suất theo danh mục
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {Object.entries(metrics.categoryStats).map(([category, stats]) => (
            <div
              key={category}
              className='bg-gray-700 rounded-lg p-4 border border-gray-600'
            >
              <h3 className='text-white font-semibold mb-2'>{category}</h3>
              <div className='space-y-1 text-sm text-gray-300'>
                <p>
                  Đã bán:{" "}
                  <span className='text-green-400 font-semibold'>
                    {stats.sold}
                  </span>{" "}
                  sản phẩm
                </p>
                <p>
                  Doanh thu:{" "}
                  <span className='text-blue-400 font-semibold'>
                    {formatCurrency(stats.revenue)}
                  </span>
                </p>
                <p>
                  Lợi nhuận:{" "}
                  <span className='text-green-400 font-semibold'>
                    {formatCurrency(stats.profit)}
                  </span>
                </p>
                <p>
                  Tỷ suất:{" "}
                  <span className='text-purple-400 font-semibold'>
                    {stats.revenue > 0
                      ? ((stats.profit / stats.revenue) * 100).toFixed(1)
                      : 0}
                    %
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory Warnings */}
      {warnings.length > 0 && (
        <div className='bg-red-950 border border-red-700 rounded-lg p-6 shadow-lg'>
          <div className='flex items-center gap-3 mb-4'>
            <AlertTriangle className='w-6 h-6 text-red-400' />
            <h2 className='text-xl font-bold text-red-300'>
              Cảnh báo hàng tồn lâu
            </h2>
          </div>
          <div className='space-y-2'>
            {warnings.map((product) => (
              <div
                key={product.id}
                className='bg-red-900 bg-opacity-50 rounded p-3 text-red-100 text-sm border border-red-600'
              >
                <p className='font-semibold'>{product.name}</p>
                <p className='text-red-300'>
                  Ngày thêm:{" "}
                  {new Date(product.dateAdded).toLocaleDateString("vi-VN")} - Đã
                  tồn{" "}
                  {Math.floor(
                    (new Date() - new Date(product.dateAdded)) /
                      (24 * 60 * 60 * 1000),
                  )}{" "}
                  ngày
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
