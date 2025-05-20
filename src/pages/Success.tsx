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
  const [status, setStatus] = useState('Đang xử lý');

  useEffect(() => {
    const s = localStorage.getItem('orderStatus') || 'processing';
    if (s === 'waitingBank') setStatus('Chờ chuyển khoản');
    else if (s === 'processing') setStatus('Đang xử lý đơn hàng');
    else setStatus('Đơn hàng đã được ghi nhận');
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Cảm ơn bạn đã đặt hàng!</h1>
      <p className="text-gray-700 mb-4">Trạng thái: {status}</p>
      <Link to="/my-orders" className="text-blue-600 underline">Xem đơn hàng</Link>
    </div>
  );
};

export default Success;
