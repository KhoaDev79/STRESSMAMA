# STRESSMAMA - Kiến Trúc Hệ Thống & Tài Liệu Kỹ Thuật

## 📋 Tổng Quan Kiến Trúc

```
┌─────────────────────────────────────────────────────────┐
│                    STRESSMAMA APP                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐        │
│  │ Dashboard  │  │ Kho Hàng   │  │ Phân Tích  │        │
│  └────┬───────┘  └────┬───────┘  └────┬───────┘        │
│       │               │               │                 │
│       └───────────────┼───────────────┘                 │
│                       │                                 │
│                  ┌────▼──────┐                          │
│                  │  useStore  │  (State Management)     │
│                  └────┬──────┘                          │
│                       │                                 │
│              ┌────────┼────────┐                        │
│              │        │        │                        │
│         ┌────▼──┐┌────▼──┐┌───▼────┐                  │
│         │Products││Metrics││Timeline│                  │
│         └────────┘└───────┘└────────┘                  │
│              │                                          │
│         LocalStorage (JSON)                             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 🗂️ Cấu Trúc File Chi Tiết

### `src/App.jsx`

- Component chính của ứng dụng
- Quản lý state của tab hiện tại
- Quản lý form modal (thêm/sửa sản phẩm)
- Xử lý routing giữa các tab
- Tích hợp header, navigation, và footer

**Key State:**

```javascript
- currentTab: 'dashboard' | 'products' | 'analytics'
- showForm: boolean
- editingProduct: Product | null
```

### `src/hooks/useStore.js`

**Trách vụ:** Quản lý toàn bộ business logic và state

- Khởi tạo dữ liệu từ localStorage
- CRUD operations cho sản phẩm
- Tính toán metrics tài chính
- Phát hiện hàng tồn lâu
- Xử lý timeline data cho charts

**Functions chính:**

```javascript
-addProduct(product) - // Thêm sản phẩm
  updateProduct(id, updates) - // Cập nhật sản phẩm
  deleteProduct(id) - // Xóa sản phẩm
  markSold(productId, sizeIndex) - // Đánh dấu bán
  calculateMetrics() - // Tính KPIs
  getInventoryWarnings() - // Cảnh báo hàng tồn
  getTimelineData(); // Dữ liệu biểu đồ
```

**Data Structure:**

```javascript
Product {
  id: number,
  name: string,
  category: 'Áo' | 'Quần' | 'Phụ kiện',
  sizes: Array<{
    size: 'S' | 'M' | 'L' | 'XL' | 'Freesize',
    quantity: number,      // Tồn kho
    sold: number          // Đã bán
  }>,
  costPrice: number,       // Giá vốn (₫)
  sellingPrice: number,    // Giá bán (₫)
  dateAdded: string,       // ISO date string
  status: string,          // 'Còn hàng' | 'Hết hàng'
  notes: string           // Ghi chú
}
```

### `src/components/Dashboard.jsx`

**Hiển thị:**

- 4 KPI cards (Doanh thu, Vốn, Lợi nhuận, Tỷ suất)
- Category performance grid
- Inventory warnings (nếu có)

**Inputs:**

```javascript
- metrics: {
    totalCost: number,
    totalRevenue: number,
    totalProfit: number,
    categoryStats: {
      'Áo': { sold, profit, cost, revenue },
      'Quần': {...},
      'Phụ kiện': {...}
    },
    profitMargin: string (%)
  }
- warnings: Array<Product>
```

### `src/components/ProductForm.jsx`

**Tính năng:**

- Form thêm/sửa sản phẩm
- Validation (giá bán > giá vốn)
- Dynamic size management (add/remove)
- Real-time profit calculation display

**Form Fields:**

- Tên sản phẩm (text, required)
- Loại (select, required)
- Sizes array (dynamic)
- Giá vốn (number, required)
- Giá bán (number, required)
- Ghi chú (textarea, optional)

### `src/components/ProductList.jsx`

**Tính năng:**

- Hiển thị danh sách sản phẩm
- Expandable detail rows
- Cảnh báo hàng tồn lâu (highlight đỏ)
- Size breakdown table
- Quick actions (Edit, Delete, Mark Sold)

**Key Features:**

```javascript
- Highlight sản phẩm >30 ngày tồn
- Hiển thị tính toán lợi nhuận
- Quick "Bán" button cho mỗi size
- Inline product stats
```

### `src/components/Analytics.jsx`

**Biểu đồ:**

1. **Line Chart** - Doanh thu & Lợi nhuận theo thời gian
2. **Pie Chart** - Số lượng bán theo danh mục
3. **Bar Chart** - Doanh thu vs Lợi nhuận so sánh
4. **Progress Bars** - Tỷ suất lợi nhuận chi tiết

**Dependencies:** Recharts

- LineChart, BarChart, PieChart
- Custom Tooltip với định dạng tiền tệ

### `src/utils/helpers.js`

**Utilities:**

```javascript
-formatCurrency(amount) - // Format ₫
  formatDate(dateString) - // Format ngày
  calculateProfit(cost, selling, qty) - // Tính lợi nhuận
  calculateProfitMargin(profit, revenue) -
  getInventoryDays(dateAdded) - // Ngày tồn
  isInventoryOld(dateAdded) - // Check >30 ngày
  getBestSellers(products, limit) -
  getMostProfitable(products, limit) -
  getSummaryStats(products);
```

### `src/index.css`

- Tailwind CSS directives (@tailwind)
- Custom scrollbar styling
- Base layer customizations

### `tailwind.config.js`

- Cấu hình màu sắc custom
- Extended font family
- Dark mode configuration
- Content paths

## 📊 Luồng Dữ Liệu (Data Flow)

### 1. Thêm Sản Phẩm

```
Click "Thêm sản phẩm"
  ↓
ProductForm opens
  ↓
User fills form → onSubmit
  ↓
useStore.addProduct()
  ↓
localStorage updated
  ↓
UI re-renders
```

### 2. Cập Nhật Metrics

```
useStore.calculateMetrics()
  ↓
Iterate all products
  ↓
Calculate: profit, revenue, margin
  ↓
Group by category
  ↓
Return metrics object
  ↓
Dashboard re-renders
```

### 3. Đánh Dấu Bán

```
Click "Bán" on size
  ↓
markSold(productId, sizeIndex)
  ↓
Decrease quantity
  ↓
Increase sold
  ↓
localStorage updated
  ↓
Metrics recalculated
  ↓
UI updated
```

## 💾 LocalStorage Schema

**Key:** `ssma_products`

```javascript
[
  {
    id: 1,
    name: "Vintage Denim Jacket",
    category: "Áo",
    sizes: [
      { size: "S", quantity: 2, sold: 0 },
      { size: "M", quantity: 3, sold: 1 },
    ],
    costPrice: 250000,
    sellingPrice: 450000,
    dateAdded: "2026-04-12",
    status: "Còn hàng",
    notes: "Áo khoác denim vintage",
  },
  // ... more products
];
```

## 🎨 Tailwind CSS Classes Strategy

### Color Palette

- **Background**: `bg-gray-950` (main), `bg-gray-900` (secondary)
- **Text**: `text-white`, `text-gray-300`, `text-gray-400`
- **Accent**: `bg-blue-600`, `text-blue-400`
- **Success**: `text-green-400`
- **Warning**: `text-red-400`, `bg-red-950`

### Responsive Classes

```css
grid-cols-1           /* Mobile */
md:grid-cols-2        /* Tablet */
lg:grid-cols-4        /* Desktop */
```

### Utility Classes Used

- `rounded-lg` - Border radius
- `shadow-lg` - Elevation
- `hover:` - Interactive states
- `transition` - Smooth animations
- `border border-gray-700` - Borders

## 🔄 State Management Pattern

**Hook-based approach using useState + localStorage:**

```javascript
const [products, setProducts] = useState(() => {
  // Initialize from localStorage
  const saved = localStorage.getItem("ssma_products");
  return saved ? JSON.parse(saved) : defaultData;
});

// Auto-save on change
useEffect(() => {
  localStorage.setItem("ssma_products", JSON.stringify(products));
}, [products]);
```

## 📱 Responsive Behavior

### Breakpoints Used

- `sm:` (640px) - Small devices
- `md:` (768px) - Tablets
- `lg:` (1024px) - Desktops
- `max-w-7xl` - Max content width

### Mobile Optimizations

- Single column on mobile
- Expandable rows instead of modals on small screens
- Touch-friendly button sizes
- Horizontal scroll tables

## 🚨 Error Handling & Validation

### Form Validation

```javascript
if (!formData.name.trim() || !formData.costPrice || !formData.sellingPrice) {
  alert("Vui lòng điền đầy đủ thông tin bắt buộc");
  return;
}

if (formData.costPrice >= formData.sellingPrice) {
  alert("Giá bán phải cao hơn giá vốn");
  return;
}
```

### Delete Confirmation

```javascript
if (window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) {
  onDelete(product.id);
}
```

## 🔐 Data Persistence

- **Auto-save**: Mỗi lần products thay đổi
- **Format**: JSON string
- **Storage**: Browser LocalStorage
- **Backup**: Manual export (future feature)

## 📈 Performance Considerations

1. **Memo optimization** (potential future improvement)
   - Prevent unnecessary re-renders with React.memo
   - useMemo for expensive calculations

2. **Data fetching** (for future API integration)
   - Lazy load product details
   - Pagination for large product lists

3. **Chart optimization**
   - ResponsiveContainer from Recharts
   - Automatic responsive sizing

## 🔌 API Integration Points (Future)

```javascript
// Replace useStore with API calls:
// - GET /api/products
// - POST /api/products
// - PUT /api/products/:id
// - DELETE /api/products/:id
// - GET /api/analytics/metrics
```

## 🐛 Known Limitations & Future Improvements

### Current Limitations

- Single user (no authentication)
- No backup/export feature
- All data in browser storage

### Planned Features

- [ ] Cloud sync
- [ ] Multi-user support
- [ ] CSV export/import
- [ ] Monthly reporting
- [ ] Inventory forecasting
- [ ] Price history tracking
- [ ] Customer management
- [ ] Advanced filtering/search

---

**Version:** 1.0.0
**Last Updated:** April 2026
**Maintained by:** Stressmama Team
