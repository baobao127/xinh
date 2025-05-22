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
  const [orderInfo, setOrderInfo] = useState<any>(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrderInfo(JSON.parse(lastOrder));
    }
  }, []);

  if (!orderInfo) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Không tìm thấy thông tin đơn hàng.</p>
        <Link to="/" className="text-blue-600 underline">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Đặt hàng thành công!</h2>
      <p className="mb-2">Cảm ơn bạn <strong>{orderInfo.name}</strong> đã mua sắm tại XinhStyle!</p>
      <p className="mb-2">Tổng tiền: <strong>{orderInfo.total.toLocaleString()}đ</strong></p>
      <p className="mb-4">Phương thức thanh toán: <strong>{orderInfo.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng (COD)' : 'Chuyển khoản ngân hàng'}</strong></p>

      {orderInfo.paymentMethod === 'bank' && (
        <div className="border rounded p-3 bg-yellow-50 text-sm">
          <p className="mb-1">Vui lòng chuyển khoản đến:</p>
          <p><strong>Ngân hàng:</strong> MB Bank</p>
          <p><strong>Số tài khoản:</strong> 1234567890</p>
          <p><strong>Chủ tài khoản:</strong> NGUYEN VAN A</p>
          <p className="mt-2">Nội dung: <strong>XINHSTYLE - {orderInfo.id}</strong></p>
          <p className="mt-2 text-red-600 font-semibold">Sau khi chuyển khoản, chúng tôi sẽ xác nhận và giao hàng.</p>
        </div>
      )}

      <div className="mt-6 text-center">
        <Link to="/" className="bg-black text-white px-4 py-2 rounded">Tiếp tục mua sắm</Link>
      </div>
    </div>
  );
};

export default Success;

