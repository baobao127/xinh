import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Xinh Style</Link>
      <nav className="space-x-4">
        <Link to="/cart">Giỏ hàng</Link>
        <Link to="/admin/products">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
