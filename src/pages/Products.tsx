import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchFilterBar from '@/components/SearchFilterBar';

const mockProducts = [
  { id: '1', name: 'Đầm body', price: 180000, category: 'đầm', image: 'https://via.placeholder.com/200x300?text=Đầm' },
  { id: '2', name: 'Áo khoác', price: 350000, category: 'áo', image: 'https://via.placeholder.com/200x300?text=Áo' },
  { id: '3', name: 'Váy maxi', price: 650000, category: 'váy', image: 'https://via.placeholder.com/200x300?text=Váy' },
];

const Products: React.FC = () => {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  const filtered = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrice =
      filterPrice === 'duoi200' ? p.price < 200000 :
      filterPrice === '200-500' ? p.price >= 200000 && p.price <= 500000 :
      filterPrice === 'tren500' ? p.price > 500000 :
      true;
    return matchName && matchPrice;
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sản phẩm</h1>
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        filterPrice={filterPrice}
        onFilterPrice={setFilterPrice}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-red-500">{item.price.toLocaleString()}đ</p>
            <Link to={`/product/${item.id}`} className="text-sm text-blue-600 hover:underline">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
