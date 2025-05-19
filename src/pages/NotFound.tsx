import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold mb-4 text-red-600">404 - Không tìm thấy trang</h2>
      <Link to="/" className="text-blue-600 underline">Quay lại trang chủ</Link>
    </div>
  );
};

export default NotFound;
