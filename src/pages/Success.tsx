import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Đặt hàng thành công!</h2>
      <p className="mb-4">Cảm ơn bạn đã mua hàng tại Xinh Style.</p>
      <Link to="/" className="text-blue-600 underline">Quay lại trang chủ</Link>
    </div>
  );
};

export default Success;
