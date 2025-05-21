import React from 'react';
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
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold mb-4 text-green-600">Đặt hàng thành công!</h2>
      <p className="mb-4">Cảm ơn bạn đã mua sắm tại Xinh Style.</p>
      <p className="mb-4">Chúng tôi sẽ liên hệ để xác nhận đơn hàng sớm nhất.</p>
      <Link to="/my-orders" className="text-blue-600 underline">
        Xem đơn hàng của bạn
      </Link>
    </div>
  );
};

export default Success;
