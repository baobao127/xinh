import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Đặt hàng thành công!</h1>
      <p className="mb-4">Cảm ơn bạn đã mua sắm tại Xinh Style.</p>
      <Link to="/" className="bg-black text-white px-4 py-2 rounded">Về trang chủ</Link>
    </div>
  );
};

export default Success;
