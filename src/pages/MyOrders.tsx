import React, { useEffect, useState } from 'react';
import { getAllOrders } from '@/lib/OrderUtils';

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    setOrders(getAllOrders());
  }, []);

  if (!orders.length)
    return <div className="p-4 text-center">Bạn chưa có đơn hàng nào.</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Đơn hàng của bạn</h2>
      {orders.map((order) => (
        <div key={order.id} className="border p-3 rounded">
          <p className="font-semibold">#{order.id}</p>
          <p className="text-sm text-gray-600">{order.name} - {order.address}</p>
          <p className="text-sm text-blue-500">Trạng thái: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
