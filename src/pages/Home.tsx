import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Chào mừng đến với Xinh Style!</h1>
      <p className="mb-6">Khám phá bộ sưu tập thời trang mới nhất của chúng tôi.</p>
      <Link to="/cart" className="bg-black text-white px-4 py-2 rounded">Xem giỏ hàng</Link>
    </div>
  );
};

export default Home;
