import React, { useEffect, useState } from 'react';

const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(data);
  }, []);

  const updateStatus = (id: number, newStatus: string) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
    localStorage.setItem('orders', JSON.stringify(updated));
  };

  const statuses = ['Đang xử lý', 'Đang giao hàng', 'Giao thành công', 'Đã huỷ'];

  if (!orders.length)
    return <p className="p-4 text-gray-600">Chưa có đơn hàng nào.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Quản lý đơn hàng</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded">
            <p className="text-sm mb-1">Khách: {order.name}</p>
            <p className="text-sm mb-1">Địa chỉ: {order.address}</p>
            <p className="text-sm mb-1">Thanh toán: {order.paymentMethod}</p>
            <p className="text-sm mb-1">Thời gian: {new Date(order.createdAt).toLocaleString()}</p>

            <p className="text-sm font-semibold mt-2 mb-1">Sản phẩm:</p>
            <ul className="list-disc pl-5 text-sm mb-2">
              {order.items.map((item: any) => (
                <li key={item.id}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>

            <select
              value={order.status || 'Đang xử lý'}
              onChange={(e) => updateStatus(order.id, e.target.value)}
              className="border p-2 rounded mt-2"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
