import React, { useState } from "react";
import { Edit, Trash2, AlertTriangle } from "lucide-react";

export const ProductList = ({ products, onEdit, onDelete, onMarkSold }) => {
  const [expandedId, setExpandedId] = useState(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const isInventoryOld = (dateAdded) => {
    const days = Math.floor(
      (new Date() - new Date(dateAdded)) / (24 * 60 * 60 * 1000),
    );
    return days > 30;
  };

  const getTotalQuantity = (product) => {
    return product.sizes.reduce((sum, s) => sum + s.quantity, 0);
  };

  const getTotalSold = (product) => {
    return product.sizes.reduce((sum, s) => sum + s.sold, 0);
  };

  const getInventoryDays = (dateAdded) => {
    return Math.floor(
      (new Date() - new Date(dateAdded)) / (24 * 60 * 60 * 1000),
    );
  };

  return (
    <div className='space-y-3'>
      {products.length === 0 ? (
        <div className='text-center py-8 text-gray-400'>
          <p>Chưa có sản phẩm nào. Hãy thêm sản phẩm đầu tiên!</p>
        </div>
      ) : (
        products.map((product) => {
          const totalQty = getTotalQuantity(product);
          const totalSold = getTotalSold(product);
          const isOld = isInventoryOld(product.dateAdded);
          const days = getInventoryDays(product.dateAdded);
          const profit = (product.sellingPrice - product.costPrice) * totalSold;

          return (
            <div
              key={product.id}
              className={`border rounded-lg overflow-hidden transition ${
                isOld
                  ? "border-red-700 bg-red-950 bg-opacity-30"
                  : "border-gray-700 bg-gray-800"
              }`}
            >
              {/* Header */}
              <div
                onClick={() =>
                  setExpandedId(expandedId === product.id ? null : product.id)
                }
                className='p-4 cursor-pointer hover:bg-gray-700 transition flex items-start justify-between'
              >
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-2'>
                    <h3 className='text-white font-bold'>{product.name}</h3>
                    <span className='px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded'>
                      {product.category}
                    </span>
                    {isOld && (
                      <div className='flex items-center gap-1 px-2 py-1 bg-red-900 text-red-200 text-xs rounded'>
                        <AlertTriangle className='w-3 h-3' />
                        Tồn {days} ngày
                      </div>
                    )}
                  </div>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300 mt-2'>
                    <div>
                      <p className='text-gray-400'>Giá vốn</p>
                      <p className='text-white font-semibold'>
                        {formatCurrency(product.costPrice)}
                      </p>
                    </div>
                    <div>
                      <p className='text-gray-400'>Giá bán</p>
                      <p className='text-white font-semibold'>
                        {formatCurrency(product.sellingPrice)}
                      </p>
                    </div>
                    <div>
                      <p className='text-gray-400'>Tồn kho</p>
                      <p className='text-white font-semibold'>{totalQty}</p>
                    </div>
                    <div>
                      <p className='text-gray-400'>Đã bán</p>
                      <p className='text-green-400 font-semibold'>
                        {totalSold}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex gap-2 ml-4'>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(product);
                    }}
                    className='p-2 hover:bg-blue-900 text-blue-400 rounded transition'
                  >
                    <Edit className='w-5 h-5' />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (
                        window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?")
                      ) {
                        onDelete(product.id);
                      }
                    }}
                    className='p-2 hover:bg-red-900 text-red-400 rounded transition'
                  >
                    <Trash2 className='w-5 h-5' />
                  </button>
                </div>
              </div>

              {/* Details */}
              {expandedId === product.id && (
                <div className='border-t border-gray-700 p-4 bg-gray-900 bg-opacity-50'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <div>
                      <p className='text-gray-400 text-sm mb-2'>
                        Ngày thêm kho
                      </p>
                      <p className='text-white'>
                        {new Date(product.dateAdded).toLocaleDateString(
                          "vi-VN",
                        )}
                      </p>
                    </div>
                    <div>
                      <p className='text-gray-400 text-sm mb-2'>
                        Lợi nhuận (Tổng)
                      </p>
                      <p className='text-green-400 font-bold text-lg'>
                        {formatCurrency(profit)}
                      </p>
                    </div>
                  </div>

                  {product.notes && (
                    <div className='mb-4 p-3 bg-gray-800 rounded border border-gray-700'>
                      <p className='text-gray-400 text-sm mb-1'>Ghi chú</p>
                      <p className='text-gray-200'>{product.notes}</p>
                    </div>
                  )}

                  {/* Sizes Table */}
                  <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                      <thead>
                        <tr className='border-b border-gray-700'>
                          <th className='text-left py-2 px-2 text-gray-400 font-medium'>
                            Size
                          </th>
                          <th className='text-left py-2 px-2 text-gray-400 font-medium'>
                            Tồn kho
                          </th>
                          <th className='text-left py-2 px-2 text-gray-400 font-medium'>
                            Đã bán
                          </th>
                          <th className='text-left py-2 px-2 text-gray-400 font-medium'>
                            Tác vụ
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.sizes.map((size, idx) => (
                          <tr
                            key={idx}
                            className='border-b border-gray-700 hover:bg-gray-800'
                          >
                            <td className='py-2 px-2 text-white font-semibold'>
                              {size.size}
                            </td>
                            <td className='py-2 px-2 text-white'>
                              {size.quantity}
                            </td>
                            <td className='py-2 px-2 text-green-400 font-semibold'>
                              {size.sold}
                            </td>
                            <td className='py-2 px-2'>
                              {size.quantity > 0 && (
                                <button
                                  onClick={() => onMarkSold(product.id, idx)}
                                  className='px-2 py-1 bg-green-900 hover:bg-green-800 text-green-200 rounded text-xs transition'
                                >
                                  Bán
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};
