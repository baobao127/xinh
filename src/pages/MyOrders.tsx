import React, { useEffect, useState } from 'react';

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(data);
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Đơn hàng của bạn</h2>
      {orders.length === 0 && <p>Không có đơn hàng nào.</p>}

      {orders.map((order) => (
        <div key={order.id} className="border rounded p-4 mb-4">
          <p><strong>Khách:</strong> {order.name}</p>
          <p><strong>Địa chỉ:</strong> {order.address}</p>
          <p><strong>Thanh toán:</strong> {order.paymentMethod}</p>
          <p><strong>Trạng thái:</strong> {order.status}</p>
          <p><strong>SP:</strong> {order.items.length} sản phẩm</p>
          <ul className="text-sm list-disc ml-6">
            {order.items.map((item: any) => (
              <li key={item.id}>{item.name} x{item.quantity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
