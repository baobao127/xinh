import React, { useEffect, useState } from 'react';
import { updateOrderStatus, getAllOrders } from '@/lib/orderUtils';

const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const all = getAllOrders();
    setOrders(all);
  }, []);

  const handleUpdate = (id: number, newStatus: string) => {
    updateOrderStatus(id, newStatus);
    setOrders(getAllOrders());
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Quản lý đơn hàng</h2>
      {orders.map((order) => (
        <div key={order.id} className="border p-4 mb-4 rounded">
          <p className="font-semibold">Mã đơn: #{order.id}</p>
          <p>Khách: {order.name}</p>
          <p>Trạng thái hiện tại: <span className="text-green-600">{order.status}</span></p>
          <div className="flex gap-2 mt-2">
            {['processing', 'shipping', 'delivered', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => handleUpdate(order.id, status)}
                className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300"
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
