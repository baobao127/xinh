import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderStatus = () => {
  const status = localStorage.getItem('orderStatus') || 'processing';

  const labelMap: any = {
    processing: 'Đang xử lý',
    confirming: 'Chờ xác nhận chuyển khoản',
    shipping: 'Đang giao hàng',
    delivered: 'Đã giao',
    canceled: 'Đã huỷ'
  };

  return (
    <div className="mt-4 text-sm text-gray-700">
      <strong>Trạng thái đơn hàng:</strong> {labelMap[status] || 'Không rõ'}
    </div>
  );
}:



const Success: React.FC = () => {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const o = localStorage.getItem('lastOrder');
    if (o) setOrder(JSON.parse(o));
  }, []);

  if (!order) return <div className="p-4">Không tìm thấy đơn hàng.</div>;

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-2">Đặt hàng thành công!</h2>
      <p className="mb-4">Cảm ơn bạn đã mua hàng tại XinhStyle.</p>
      <p className="text-sm text-gray-500">Mã đơn: #{order.id}</p>
    </div>
  );
};

export default Success;

