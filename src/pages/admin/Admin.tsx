import React from 'react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Khu vực quản lý Admin</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Link to="/admin/orders" className="border p-4 rounded hover:shadow transition">
          <h2 className="text-lg font-semibold mb-2">Đơn hàng</h2>
          <p className="text-sm text-gray-600">Xem và cập nhật trạng thái đơn hàng.</p>
        </Link>

        <Link to="/admin/products" className="border p-4 rounded hover:shadow transition">
          <h2 className="text-lg font-semibold mb-2">Sản phẩm</h2>
          <p className="text-sm text-gray-600">Thêm, sửa hoặc xoá sản phẩm.</p>
        </Link>

        <Link to="/admin/settings" className="border p-4 rounded hover:shadow transition">
          <h2 className="text-lg font-semibold mb-2">Cài đặt</h2>
          <p className="text-sm text-gray-600">Zalo, Facebook, mã giảm giá, mã mở admin...</p>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
