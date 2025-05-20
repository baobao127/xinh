import React, { useEffect, useState } from 'react';


const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(data);
  }, []);

  const updateStatus = (id: number, status: string) => {
    const newOrders = orders.map((order) =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Quản lý đơn hàng</h2>
      {orders.length === 0 && <p>Chưa có đơn hàng nào.</p>}

      {orders.map((order) => (
        <div key={order.id} className="border rounded p-4 mb-4">
          <p><strong>Khách:</strong> {order.name}</p>
          <p><strong>Địa chỉ:</strong> {order.address}</p>
          <p><strong>Thanh toán:</strong> {order.paymentMethod}</p>
          <p><strong>Trạng thái:</strong> {order.status}</p>
          <select
            value={order.status}
            onChange={(e) => updateStatus(order.id, e.target.value)}
            className="mt-2 border p-1 rounded"
          >
            <option value="processing">Đang xử lý</option>
            <option value="waitingBank">Chờ chuyển khoản</option>
            <option value="shipping">Đang giao</option>
            <option value="delivered">Đã giao</option>
            <option value="cancelled">Đã hủy</option>
          </select>
        </div>
      ))}
    </div>
  );
};


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
