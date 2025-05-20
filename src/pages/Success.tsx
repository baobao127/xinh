import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto text-center py-10 px-4">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Đặt hàng thành công!</h2>
      <p className="text-gray-700 mb-6">
        Cảm ơn bạn đã tin tưởng và mua sắm tại Xinh Style. Đơn hàng của bạn đang được xử lý.
      </p>
      <div className="space-x-4">
        <Link to="/" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Về trang chủ
        </Link>
        <Link to="/orders" className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
          Xem đơn hàng
        </Link>
      </div>
    </div>
  );
};

export default Success;
