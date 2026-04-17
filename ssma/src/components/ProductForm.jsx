import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const CATEGORIES = ["Áo", "Quần", "Phụ kiện"];
const SIZE_OPTIONS = ["S", "M", "L", "XL", "Freesize"];

export const ProductForm = ({ onSubmit, onCancel, initialProduct = null }) => {
  const [formData, setFormData] = useState(
    initialProduct || {
      name: "",
      category: "Áo",
      sizes: [{ size: "M", quantity: 1, sold: 0 }],
      costPrice: "",
      sellingPrice: "",
      notes: "",
    },
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "costPrice" || name === "sellingPrice"
          ? parseFloat(value) || ""
          : value,
    });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index] = {
      ...newSizes[index],
      [field]:
        field === "quantity" || field === "sold" ? parseInt(value) || 0 : value,
    };
    setFormData({ ...formData, sizes: newSizes });
  };

  const addSize = () => {
    setFormData({
      ...formData,
      sizes: [...formData.sizes, { size: "S", quantity: 1, sold: 0 }],
    });
  };

  const removeSize = (index) => {
    setFormData({
      ...formData,
      sizes: formData.sizes.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.costPrice ||
      !formData.sellingPrice
    ) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    if (formData.costPrice >= formData.sellingPrice) {
      alert("Giá bán phải cao hơn giá vốn");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      {/* Basic Info */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-300 mb-2'>
            Tên sản phẩm <span className='text-red-400'>*</span>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Nhập tên sản phẩm'
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-300 mb-2'>
            Loại <span className='text-red-400'>*</span>
          </label>
          <select
            value={formData.category}
            onChange={handleCategoryChange}
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition'
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-300 mb-2'>
            Giá vốn (COGS) <span className='text-red-400'>*</span>
          </label>
          <input
            type='number'
            name='costPrice'
            value={formData.costPrice}
            onChange={handleInputChange}
            placeholder='0'
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-300 mb-2'>
            Giá bán niêm yết <span className='text-red-400'>*</span>
          </label>
          <input
            type='number'
            name='sellingPrice'
            value={formData.sellingPrice}
            onChange={handleInputChange}
            placeholder='0'
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition'
          />
          {formData.costPrice && formData.sellingPrice && (
            <p className='text-xs text-green-400 mt-1'>
              Lợi nhuận/sản phẩm:{" "}
              {parseInt(
                formData.sellingPrice - formData.costPrice,
              ).toLocaleString("vi-VN")}{" "}
              ₫
            </p>
          )}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div className='flex items-center justify-between mb-3'>
          <label className='block text-sm font-medium text-gray-300'>
            Phân loại Size <span className='text-red-400'>*</span>
          </label>
          <button
            type='button'
            onClick={addSize}
            className='flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition'
          >
            <Plus className='w-4 h-4' /> Thêm size
          </button>
        </div>

        <div className='space-y-3'>
          {formData.sizes.map((sizeData, index) => (
            <div key={index} className='flex gap-3 items-start'>
              <div className='flex-1 grid grid-cols-3 gap-2'>
                <select
                  value={sizeData.size}
                  onChange={(e) =>
                    handleSizeChange(index, "size", e.target.value)
                  }
                  className='px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm'
                >
                  {SIZE_OPTIONS.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>

                <input
                  type='number'
                  value={sizeData.quantity}
                  onChange={(e) =>
                    handleSizeChange(index, "quantity", e.target.value)
                  }
                  placeholder='Số lượng'
                  min='0'
                  className='px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm'
                />

                <input
                  type='number'
                  value={sizeData.sold}
                  onChange={(e) =>
                    handleSizeChange(index, "sold", e.target.value)
                  }
                  placeholder='Đã bán'
                  min='0'
                  className='px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm'
                />
              </div>

              {formData.sizes.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeSize(index)}
                  className='p-2 hover:bg-red-900 hover:bg-opacity-50 text-red-400 rounded transition mt-0'
                >
                  <X className='w-4 h-4' />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className='block text-sm font-medium text-gray-300 mb-2'>
          Ghi chú
        </label>
        <textarea
          name='notes'
          value={formData.notes}
          onChange={handleInputChange}
          placeholder='Mô tả sản phẩm, tình trạng, v.v...'
          rows='3'
          className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition resize-none'
        />
      </div>

      {/* Actions */}
      <div className='flex gap-3 justify-end'>
        <button
          type='button'
          onClick={onCancel}
          className='px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition'
        >
          Hủy
        </button>
        <button
          type='submit'
          className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium'
        >
          {initialProduct ? "Cập nhật" : "Thêm sản phẩm"}
        </button>
      </div>
    </form>
  );
};
