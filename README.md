# Xinh Style - Mini Fashion Store

Một giao diện web bán hàng thời trang dành cho mobile-first, thiết kế bằng **React + TypeScript + TailwindCSS**, dữ liệu xử lý qua **localStorage**, không cần backend thật.

## Tính năng chính

- [x] Trang chủ: sản phẩm nổi bật, flash sale, lời chào
- [x] Danh sách sản phẩm (products)
- [x] Chi tiết sản phẩm
- [x] Giỏ hàng + thanh toán (COD hoặc Bank)
- [x] Đơn hàng + trạng thái đơn
- [x] Wishlist, so sánh, mã giảm giá, popup toast
- [x] Admin: quản lý sản phẩm, đơn hàng, fake login
- [x] Hiệu ứng UI hiện đại, responsive

## Cấu trúc thư mục

```bash
src/
├── components/        # Component tái sử dụng
├── context/           # Cart, Wishlist Context
├── hooks/             # useLocalStorage, useToast, useCountdown
├── lib/               # fakeApi, utils, logic đơn hàng
├── pages/             # Các trang chính
│   ├── admin/         # Trang admin quản lý
│   ├── Cart.tsx       
│   ├── Home.tsx       
│   └── ProductsView.tsx  
├── routes/            # AppRoutes.tsx
├── App.tsx           
├── main.tsx


npm install
npm run dev
