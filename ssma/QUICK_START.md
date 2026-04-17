# 🚀 QUICK START GUIDE - STRESSMAMA

## ⚡ Bắt Đầu Nhanh (5 Phút)

### Step 1: Cài Đặt Dependencies

```bash
cd ssma
npm install
```

### Step 2: Chạy Development Server

```bash
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173`

## 📝 Ví Dụ Thực Tế

### Scenario 1: Thêm Sản Phẩm Áo

1. **Nhấn** "Thêm sản phẩm"
2. **Điền thông tin:**
   - Tên: `Vintage Band T-Shirt`
   - Loại: `Áo`
   - Giá vốn: `120000` ₫
   - Giá bán: `280000` ₫
3. **Thêm Sizes:**
   - Size S: 2 chiếc
   - Size M: 3 chiếc
   - Size L: 1 chiếc
4. **Ghi chú:** `Band tee 90s, tình trạng tốt`
5. **Nhấn** "Thêm sản phẩm"

✅ Sản phẩm được thêm, dữ liệu lưu vào LocalStorage

### Scenario 2: Đánh Dấu Bán

1. Vào tab **"Kho hàng"**
2. Click vào sản phẩm để **expand**
3. Nhấn nút **"Bán"** tại size đã bán
4. Số lượng tồn giảm đi 1, "Đã bán" tăng lên 1
5. Dashboard **tự động update** doanh thu & lợi nhuận

### Scenario 3: Theo Dõi Lợi Nhuận

1. Vào tab **"Tổng quan"**
2. Xem:
   - **Doanh thu**: Tổng tiền bán (price × sold)
   - **Vốn**: Tổng giá vốn (costPrice × sold)
   - **Lợi nhuận**: Doanh thu - Vốn
   - **Tỷ suất**: Lợi nhuận / Doanh thu × 100%
3. Xem **hiệu suất theo danh mục** (Áo/Quần/Phụ kiện)

### Scenario 4: Phát Hiện Hàng Tồn Lâu

Hệ thống **tự động cảnh báo**:

- Sản phẩm tồn **>30 ngày** = hiển thị **RED ALERT**
- Ví dụ: "Tồn 32 ngày"
- Giúp bạn **xả kho kịp thời**

## 📊 Dashboard Overview

```
┌─────────────────────────────────────────────────────────┐
│ STRESSMAMA - Tổng quan                                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│ │   Doanh Thu  │ │     Vốn      │ │  Lợi Nhuận   │    │
│ │ 15,200,000₫ │ │ 8,500,000₫  │ │ 6,700,000₫  │    │
│ └──────────────┘ └──────────────┘ └──────────────┘    │
│                                                          │
│ ┌──────────────┐                                        │
│ │  Tỷ Suất     │                                        │
│ │   44.08%     │                                        │
│ └──────────────┘                                        │
│                                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Hiệu Suất Theo Danh Mục                              │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ Áo:         Đã bán: 5 | Doanh thu: 7,800,000₫     │ │
│ │ Quần:       Đã bán: 3 | Doanh thu: 5,100,000₫     │ │
│ │ Phụ kiện:   Đã bán: 8 | Doanh thu: 2,300,000₫     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                          │
│ ⚠️  CẢNH BÁO HÀNG TỒN LÂU                               │
│ Vintage Denim Jacket - Tồn 35 ngày                     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 🎯 Các Tính Năng Chính

### ✅ Quản Lý Sản Phẩm

```
├── Thêm sản phẩm ✓
├── Sửa sản phẩm ✓
├── Xóa sản phẩm ✓
├── Quản lý Size (S,M,L,XL,Freesize) ✓
└── Đánh dấu bán ✓
```

### ✅ Tính Toán Tài Chính

```
├── Lợi nhuận/sản phẩm = Giá bán - Giá vốn ✓
├── Doanh thu = Giá bán × Số bán ✓
├── Vốn = Giá vốn × Số bán ✓
└── Tỷ suất = Lợi nhuận / Doanh thu × 100% ✓
```

### ✅ Cảnh Báo Hàng Tồn

```
├── Tự động detect >30 ngày ✓
├── Hiển thị RED ALERT ✓
└── Hiển thị số ngày tồn ✓
```

### ✅ Biểu Đồ & Phân Tích

```
├── Xu hướng doanh thu (Line Chart) ✓
├── Số lượng bán (Pie Chart) ✓
├── So sánh doanh thu & lợi nhuận (Bar Chart) ✓
└── Tỷ suất lợi nhuận chi tiết ✓
```

## 🔄 Workflow Hàng Ngày

### Sáng

1. Mở STRESSMAMA
2. Xem **Dashboard** (tổng quan tình hình)
3. Check **Cảnh báo hàng tồn lâu**

### Khi Nhận Hàng

1. Nhấn **"Thêm sản phẩm"**
2. Điền đầy đủ thông tin (đặc biệt giá vốn)
3. Chọn các size có sẵn
4. Lưu

### Khi Bán Hàng

1. Vào **"Kho hàng"**
2. Tìm sản phẩm đã bán
3. Expand và nhấn **"Bán"** trên size tương ứng
4. Lợi nhuận & doanh thu tự động update

### Cuối Ngày

1. Vào **"Phân tích"**
2. Xem chart doanh thu & lợi nhuận
3. Kiểm tra danh mục nào bán tốt nhất

## 💡 Mẹo Sử Dụng

### 1. Giá Vốn Rất Quan Trọng

```javascript
Không điền giá vốn → Không tính được lợi nhuận
Hãy luôn nhập chính xác giá mua hàng
```

### 2. Ghi Chú Chi Tiết

```
Tốt: "Áo khoác denim vintage, size hơi nhỏ, tình trạng 9/10"
Yếu: "Áo cũ"
```

### 3. Kiểm Tra Thường Xuyên

```
- Mỗi tuần check cảnh báo hàng tồn lâu
- Mỗi tháng xem phân tích lợi nhuận
- Điều chỉnh giá bán cho hàng chậm bán
```

### 4. Backup Dữ Liệu

```
Browser > DevTools (F12)
→ Application
→ Local Storage
→ Copy key "ssma_products"
→ Lưu vào file .json
```

## 🎨 Giao Diện & Theme

- **Dark Mode** (mặc định, tối giản)
- **Streetwear Style** (hiện đại, sạch sẽ)
- **Responsive** (laptop, tablet, mobile)

### Navigation

```
STRESSMAMA
├── 📊 Tổng quan (Dashboard)
├── 📦 Kho hàng (Inventory)
└── 📈 Phân tích (Analytics)
```

## 🆘 Troubleshooting

### Q: Dữ liệu bị xóa?

**A:**

- Check DevTools → Application → Local Storage
- Key là: `ssma_products`
- Nếu không có, import từ backup

### Q: Số liệu không đúng?

**A:**

- Đảm bảo giá vốn được điền chính xác
- Kiểm tra size được click để bán
- Refresh trang (Ctrl+R)

### Q: Không thấy biểu đồ?

**A:**

- Cần có ít nhất 1 sản phẩm đã bán
- Vào tab "Phân tích"
- Nếu vẫn không thấy, check console (F12)

### Q: Muốn đổi đơn vị tiền?

**A:**

- Edit file `src/utils/helpers.js`
- Tìm function `formatCurrency`
- Đổi `'vi-VN'` và `'VND'`

## 📱 Sử Dụng Trên Mobile

```
✅ Tất cả tính năng hoạt động trên mobile
✅ Swipe để mở/đóng expandable rows
✅ Responsive grid tự động adjust
✅ Touch-friendly buttons
```

## 🔗 Liên Kết Hữu Ích

- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Lucide Icons: https://lucide.dev
- Recharts: https://recharts.org

## 📞 Support

Nếu gặp bất kỳ vấn đề:

1. Check SETUP_GUIDE.md
2. Check ARCHITECTURE.md
3. Xem console (F12) có lỗi không
4. Clear localStorage, tải lại trang

---

**Chúc bạn sử dụng STRESSMAMA thành công!** 🎉

Hãy theo dõi lợi nhuận, tối ưu danh mục, và phát triển kinh doanh secondhand của bạn! 📈
