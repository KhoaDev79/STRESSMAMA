# 🎯 STRESSMAMA - Sales & Inventory Management System

**Hệ thống quản lý bán hàng và kho hàng chuyên nghiệp cho Seller đồ Secondhand**

Xây dựng bằng **React.js**, **Tailwind CSS**, **Recharts** và **Lucide React Icons**.

> Một giải pháp toàn diện để quản lý sản phẩm, tính toán lợi nhuận, phân tích doanh thu và phát hiện hàng tồn lâu.

---

## ✨ Điểm Nổi Bật

🎨 **Giao Diện Modern**

- Dark mode tối giản, phong cách streetwear
- Responsive design (laptop, tablet, mobile)
- Smooth animations & transitions

📦 **Quản Lý Sản Phẩm**

- Thêm/sửa/xóa sản phẩm
- Quản lý Size (S, M, L, XL, Freesize)
- Phân loại danh mục (Áo, Quần, Phụ kiện)

💰 **Phân Tích Tài Chính**

- Tính lợi nhuận tự động
- Tỷ suất lợi nhuận (Profit Margin)
- Doanh thu theo danh mục

📊 **Biểu Đồ & Thống Kê**

- Line chart: Xu hướng doanh thu & lợi nhuận
- Pie chart: Số lượng bán theo danh mục
- Bar chart: So sánh doanh thu vs lợi nhuận
- Progress bars: Tỷ suất chi tiết

⚠️ **Cảnh Báo Hàng Tồn**

- Tự động phát hiện hàng tồn >30 ngày
- Hiển thị RED ALERT để xả kho kịp thời

💾 **Lưu Trữ Tự Động**

- Dữ liệu lưu vào LocalStorage
- Không cần database, không cần internet

---

## 🚀 Quick Start (5 Phút)

### 1️⃣ Clone/Download Project

```bash
cd ssma
```

### 2️⃣ Cài Đặt Dependencies

```bash
npm install
```

### 3️⃣ Chạy Development Server

```bash
npm run dev
```

Mở: `http://localhost:5173`

### 4️⃣ Build Production

```bash
npm run build
```

---

## 📖 Tài Liệu Đầy Đủ

| Tài Liệu                                 | Nội Dung                                         |
| ---------------------------------------- | ------------------------------------------------ |
| **[QUICK_START.md](./QUICK_START.md)**   | Hướng dẫn sử dụng nhanh + ví dụ thực tế          |
| **[SETUP_GUIDE.md](./SETUP_GUIDE.md)**   | Cài đặt, cấu trúc, công thức tính toán           |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Kiến trúc hệ thống, data flow, technical details |

---

## 📁 Cấu Trúc Dự Án

```
ssma/
├── src/
│   ├── hooks/
│   │   └── useStore.js              ⚙️ State management
│   ├── components/
│   │   ├── Dashboard.jsx            📊 KPIs & Overview
│   │   ├── ProductForm.jsx          ➕ Add/Edit form
│   │   ├── ProductList.jsx          📦 Product list
│   │   └── Analytics.jsx            📈 Charts & Analysis
│   ├── utils/
│   │   └── helpers.js               🛠️ Utilities
│   ├── data/
│   │   └── sampleData.js            📝 Sample data
│   ├── App.jsx                      🎯 Main component
│   ├── main.jsx                     🚀 Entry point
│   └── index.css                    🎨 Tailwind CSS
├── tailwind.config.js               ⚙️ Tailwind config
├── postcss.config.js                ⚙️ PostCSS config
├── vite.config.js                   ⚙️ Vite config
├── package.json                     📦 Dependencies
├── README.md                        📄 This file
├── QUICK_START.md                   ⚡ Quick start
├── SETUP_GUIDE.md                   📚 Setup guide
└── ARCHITECTURE.md                  🏗️ Architecture
```

---

## 🎮 Hướng Dẫn Sử Dụng

### 📝 Thêm Sản Phẩm

1. Nhấn **"Thêm sản phẩm"** (góc trên phải)
2. Điền thông tin:
   - Tên sản phẩm ⭐ (bắt buộc)
   - Loại: Áo / Quần / Phụ kiện
   - Giá vốn ⭐ (bắt buộc, để tính lợi nhuận)
   - Giá bán ⭐ (bắt buộc, phải > giá vốn)
   - Size & số lượng (add multiple)
   - Ghi chú (tùy chọn)
3. Nhấn **"Thêm sản phẩm"** để lưu

### 🏪 Quản Lý Kho

1. Vào tab **"Kho hàng"**
2. Click sản phẩm để **expand** chi tiết
3. Các tác vụ:
   - **Sửa**: Chỉnh sửa thông tin
   - **Xóa**: Xóa sản phẩm
   - **Bán**: Đánh dấu 1 chiếc đã bán

### 📊 Xem Dashboard

1. Tab **"Tổng quan"** hiển thị:
   - **Doanh thu**: Tổng tiền bán
   - **Vốn**: Tổng giá nhập
   - **Lợi nhuận**: Doanh thu - Vốn
   - **Tỷ suất**: Lợi nhuận / Doanh thu
   - **Hiệu suất danh mục**: Áo vs Quần vs Phụ kiện
   - **Cảnh báo hàng tồn lâu** (nếu có)

### 📈 Phân Tích Tài Chính

1. Tab **"Phân tích"** hiển thị:
   - **Line Chart**: Xu hướng doanh thu & lợi nhuận
   - **Pie Chart**: Tỷ lệ bán theo danh mục
   - **Bar Chart**: Doanh thu vs Lợi nhuận so sánh
   - **Tỷ suất**: Chi tiết lợi nhuận từng danh mục

---

## 💡 Công Thức Tính Toán

### Lợi Nhuận (Profit)

```
Profit = (Selling Price - Cost Price) × Quantity Sold
```

### Tỷ Suất Lợi Nhuận (Profit Margin %)

```
Profit Margin = (Profit / Revenue) × 100%
```

### Cảnh Báo Hàng Tồn

```
IF (Days in Stock > 30 AND Quantity > 0) THEN Alert
```

---

## 🔄 Workflow Hàng Ngày

### 🌅 Sáng

```
1. Mở STRESSMAMA
2. Check Dashboard → Tổng quan hôm nay
3. Check Cảnh báo hàng tồn lâu
4. Plan: Xả kho nào, giảm giá gì
```

### 📦 Khi Nhận Hàng

```
1. "Thêm sản phẩm"
2. Điền: Tên, Loại, Sizes, Giá vốn, Giá bán
3. Lưu → Tự động vào kho
```

### 💵 Khi Bán Hàng

```
1. "Kho hàng" tab
2. Click sản phẩm → Expand
3. Click "Bán" tại size đã bán
4. Dashboard tự động cập nhật
```

### 📉 Cuối Ngày

```
1. "Phân tích" tab
2. Xem biểu đồ doanh thu & lợi nhuận
3. Chọn danh mục nào bán tốt
4. Điều chỉnh strategy cho ngày mai
```

---

## 🎨 Design & Technology

### Frontend Stack

- **React 19** - UI framework
- **Tailwind CSS 3** - Styling
- **Lucide React** - Icons
- **Recharts** - Charts & visualization
- **Vite** - Build tool

### Storage

- **LocalStorage** - No backend needed
- **JSON format** - Easy to backup/restore
- **Auto-save** - Every change is saved

### Color Scheme

- **Primary**: Blue (`#3b82f6`)
- **Success**: Green (`#10b981`)
- **Warning**: Orange & Red
- **Background**: Dark gray (`#1a1a1a`)
- **Text**: Light gray (`#e5e7eb`)

### Responsive Breakpoints

- 📱 Mobile: < 640px
- 📱 Tablet: 640px - 1024px
- 💻 Desktop: > 1024px

---

## 📊 Sample Data

Để test với dữ liệu mẫu:

```javascript
// Bước 1: Mở DevTools (F12)
// Bước 2: Vào Console
// Bước 3: Paste code này:

import { SAMPLE_DATA } from "./src/data/sampleData.js";
localStorage.setItem("ssma_products", JSON.stringify(SAMPLE_DATA));
location.reload();
```

Sample data bao gồm:

- 10 sản phẩm (Áo, Quần, Phụ kiện)
- Doanh thu: ~21.5M ₫
- Lợi nhuận: ~10.9M ₫
- Tỷ suất: ~50.5%
- Cảnh báo hàng tồn lâu

Xem [sampleData.js](./src/data/sampleData.js) để chi tiết.

---

## 🐛 Troubleshooting

### ❓ Dữ liệu bị mất?

**Giải pháp:**

- Kiểm tra DevTools → Application → LocalStorage
- Key: `ssma_products`
- Copy lại từ backup .json file

### ❓ Số liệu không đúng?

**Giải pháp:**

- Kiểm tra giá vốn được điền
- Kiểm tra "Bán" được click đúng size
- Refresh trang (Ctrl+R)

### ❓ Không thấy biểu đồ?

**Giải pháp:**

- Cần ít nhất 1 sản phẩm đã bán
- Vào tab "Phân tích"
- Check console (F12) có lỗi không

### ❓ Mobile không responsive?

**Giải pháp:**

- Refresh trang
- Clear cache (Ctrl+Shift+Delete)
- Kiểm tra zoom level (Ctrl+0)

---

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Cloud sync
- [ ] Multi-user support
- [ ] Authentication
- [ ] CSV export/import
- [ ] Monthly reports
- [ ] Inventory forecasting
- [ ] Price history
- [ ] Customer management
- [ ] Email notifications

---

## 📚 Học Thêm

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts Guide](https://recharts.org)
- [Lucide Icons](https://lucide.dev)
- [Vite Guide](https://vitejs.dev)

---

## 💬 Support & Questions

Nếu gặp vấn đề:

1. **Check các tài liệu:**
   - QUICK_START.md (cách dùng)
   - SETUP_GUIDE.md (cài đặt)
   - ARCHITECTURE.md (kỹ thuật)

2. **Debug tips:**
   - Mở DevTools (F12)
   - Check Console tab
   - Check Network tab
   - Check LocalStorage

3. **Reset dữ liệu:**
   ```javascript
   // Clear all data
   localStorage.removeItem("ssma_products");
   location.reload();
   ```

---

## 📝 License

© 2026 **STRESSMAMA**. Hệ thống quản lý bán hàng Secondhand.

---

## 👨‍💻 Developed By

**Full-stack Developer & Financial Management Specialist**

- React.js Frontend Development
- Tailwind CSS Styling
- Business Logic & Finance Calculations
- UX/UI Design

---

## 🎯 Mission

Giúp các Seller secondhand (Stressmama) quản lý bán hàng hiệu quả, tính toán lợi nhuận chính xác, và phát triển kinh doanh bền vững.

**Xây dựng một công cụ đơn giản nhưng mạnh mẽ, thân thiện nhưng chuyên nghiệp.**

---

**Last Updated:** April 2026
**Version:** 1.0.0
**Status:** ✅ Production Ready

**[🚀 Quick Start](./QUICK_START.md)** | **[📚 Setup Guide](./SETUP_GUIDE.md)** | **[🏗️ Architecture](./ARCHITECTURE.md)**
