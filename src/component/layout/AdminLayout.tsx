import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin/products" className="hover:underline">Sản phẩm</Link>
          <Link to="/admin/orders" className="hover:underline">Đơn hàng</Link>
          <Link to="/admin/settings" className="hover:underline">Cài đặt</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
