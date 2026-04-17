# STRESSMAMA - Hệ Thống Quản Lý Bán Hàng & Kho

Hệ thống quản lý bán hàng và kho hàng chuyên biệt cho Seller đồ Secondhand (Stressmama). Xây dựng bằng React.js, Tailwind CSS, và Recharts.

## 🎯 Tính Năng Chính

### 1. **Quản Lý Sản Phẩm & Size (Inventory)**

- ✅ Thêm sản phẩm mới với thông tin chi tiết
- ✅ Phân loại sản phẩm (Áo / Quần / Phụ kiện)
- ✅ Quản lý Size (S, M, L, XL, Freesize)
- ✅ Tính giá vốn (COGS) - bắt buộc để tính lợi nhuận
- ✅ Tính giá bán niêm yết
- ✅ Ngày nhập kho tự động
- ✅ Chỉnh sửa, xóa, cập nhật trạng thái sản phẩm
- ✅ Đánh dấu sản phẩm đã bán

### 2. **Phân Tích Tài Chính**

- ✅ Tính toán Lợi nhuận tự động (Giá bán - Giá vốn)
- ✅ Tỷ suất lợi nhuận (Profit Margin) theo danh mục
- ✅ Cảnh báo hàng tồn lâu (>30 ngày) với giao diện nổi bật

### 3. **Dashboard Thống Kê**

- ✅ Tổng doanh thu, Tổng vốn, Tổng lợi nhuận ròng
- ✅ Số lượng sản phẩm đã bán theo phân loại
- ✅ Hiệu suất theo danh mục (Áo / Quần / Phụ kiện)
- ✅ Cảnh báo hàng tồn quá lâu

### 4. **Biểu Đồ & Phân Tích**

- ✅ Biểu đồ đường (Line Chart): Xu hướng doanh thu & lợi nhuận
- ✅ Biểu đồ tròn (Pie Chart): Số lượng bán theo danh mục
- ✅ Biểu đồ cột (Bar Chart): Doanh thu vs Lợi nhuận
- ✅ Tỷ suất lợi nhuận theo danh mục

### 5. **Giao Diện (UI/UX)**

- ✅ Dark Mode (tối giản, hiện đại)
- ✅ Responsive Design (sử dụng tốt trên Laptop & Mobile)
- ✅ Phong cách Streetwear hiện đại
- ✅ Icons từ Lucide React

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React.js 19.2
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Build Tool**: Vite
- **Storage**: LocalStorage (JSON)

## 📦 Cài Đặt

### 1. Cài đặt Dependencies

```bash
cd ssma
npm install tailwindcss postcss autoprefixer lucide-react recharts
```

### 2. Chạy Development Server

```bash
npm run dev
```

### 3. Build Production

```bash
npm run build
```

## 📁 Cấu Trúc Dự Án

```
ssma/
├── src/
│   ├── hooks/
│   │   └── useStore.js              # State management & business logic
│   ├── components/
│   │   ├── Dashboard.jsx            # Tổng quan & KPIs
│   │   ├── ProductForm.jsx          # Form thêm/sửa sản phẩm
│   │   ├── ProductList.jsx          # Danh sách sản phẩm
│   │   └── Analytics.jsx            # Biểu đồ & phân tích
│   ├── App.jsx                      # Component chính
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind CSS directives
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.js                   # Vite configuration
└── package.json
```

## 🎮 Hướng Dẫn Sử Dụng

### Thêm Sản Phẩm

1. Nhấn nút "Thêm sản phẩm" ở góc trên phải
2. Điền thông tin sản phẩm:
   - Tên sản phẩm (bắt buộc)
   - Loại (Áo / Quần / Phụ kiện)
   - Size và số lượng
   - Giá vốn (bắt buộc)
   - Giá bán (bắt buộc, phải > giá vốn)
   - Ghi chú (tùy chọn)
3. Nhấn "Thêm sản phẩm" để lưu

### Quản Lý Sản Phẩm

1. Vào tab "Kho hàng"
2. Click vào sản phẩm để xem chi tiết
3. Nhấn nút "Sửa" để chỉnh sửa
4. Nhấn nút "Xóa" để xóa sản phẩm
5. Nhấn "Bán" để đánh dấu sản phẩm đã bán

### Xem Dashboard

1. Tab "Tổng quan" hiển thị:
   - Doanh thu tổng cộng
   - Vốn đầu tư
   - Lợi nhuận ròng
   - Tỷ suất lợi nhuận
   - Hiệu suất theo danh mục
   - Cảnh báo hàng tồn lâu (>30 ngày)

### Phân Tích Tài Chính

1. Tab "Phân tích" hiển thị:
   - Biểu đồ doanh thu & lợi nhuận theo thời gian
   - Số lượng bán theo danh mục
   - Doanh thu vs Lợi nhuận theo danh mục
   - Tỷ suất lợi nhuận chi tiết

## 💾 Lưu Trữ Dữ Liệu

- Dữ liệu được lưu tự động vào **LocalStorage** của trình duyệt
- Mỗi lần cập nhật sản phẩm, dữ liệu sẽ được lưu lại
- Để xóa toàn bộ dữ liệu, xóa localStorage key `ssma_products` trong Developer Tools

## 📊 Công Thức Tính Toán

### Lợi Nhuận (Profit)

```
Lợi Nhuận = (Giá Bán - Giá Vốn) × Số Lượng Bán
```

### Tỷ Suất Lợi Nhuận (Profit Margin)

```
Tỷ Suất = (Lợi Nhuận / Doanh Thu) × 100%
```

### Cảnh Báo Hàng Tồn

```
Hiển thị cảnh báo nếu:
- Ngày thêm kho > 30 ngày
- Và vẫn còn tồn kho chưa bán
```

## 🎨 Màu Sắc & Giao Diện

- **Chủ đạo**: Dark Gray (bg-gray-950)
- **Accent**: Blue (hover effects)
- **Success**: Green (lợi nhuận, số bán)
- **Warning**: Red (cảnh báo, xóa)
- **Gradient**: Blue → Purple (header)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔄 Luồng Công Việc Chính

1. **Nhập Hàng** → Thêm sản phẩm với giá vốn
2. **Quản Lý Kho** → Theo dõi tồn kho theo size
3. **Bán Hàng** → Đánh dấu đã bán khi có khách
4. **Phân Tích** → Xem doanh thu & lợi nhuận
5. **Tối Ưu** → Xả kho các sản phẩm tồn lâu

## 🚀 Cải Tiến Tiếp Theo (Suggestions)

- [ ] Thêm báo cáo email định kỳ
- [ ] Export dữ liệu thành Excel
- [ ] Integration với backend API
- [ ] Quản lý khách hàng
- [ ] Quản lý khoảnh thanh toán
- [ ] Multi-user support
- [ ] Backup & Sync dữ liệu lên cloud

## 📝 License

© 2026 STRESSMAMA. All rights reserved.

---

**Được phát triển bởi**: Full-stack Developer & Financial Management Specialist
**Ngôn ngữ**: Vietnamese Interface
**Ngày tạo**: April 2026
