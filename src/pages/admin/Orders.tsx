import React, { useEffect, useState } from 'react';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('orders');
    if (stored) setOrders(JSON.parse(stored));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Danh sách đơn hàng</h2>
      {orders.length === 0 ? (
        <p>Chưa có đơn hàng nào.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, i) => (
            <li key={i} className="border p-4 rounded shadow bg-white">
              <p><strong>Khách:</strong> {order.name}</p>
              <p><strong>Địa chỉ:</strong> {order.address}</p>
              <p><strong>Thanh toán:</strong> {order.paymentMethod}</p>
              <p><strong>SL sản phẩm:</strong> {order.items.length}</p>
              <p className="text-sm text-gray-500">Thời gian: {order.createdAt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
