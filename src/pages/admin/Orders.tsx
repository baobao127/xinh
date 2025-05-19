import React, { useEffect, useState } from 'react';
import ConfirmDialog from '@/components/ui/ConfirmDialog';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('orders');
    if (stored) setOrders(JSON.parse(stored));
  }, []);

  const handleDelete = (index: number) => {
    setSelectedIndex(index);
    setShowDialog(true);
  };

  const confirmDelete = () => {
    if (selectedIndex === null) return;
    const newOrders = [...orders];
    newOrders.splice(selectedIndex, 1);
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
    setShowDialog(false);
    setSelectedIndex(null);
  };

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
              <button onClick={() => handleDelete(i)} className="text-red-500 mt-2 hover:underline">
                Xóa đơn
              </button>
            </li>
          ))}
        </ul>
      )}
      {showDialog && (
        <ConfirmDialog
          message="Bạn chắc chắn muốn xóa đơn hàng này?"
          onConfirm={confirmDelete}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </div>
  );
};

export default Orders;
