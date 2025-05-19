import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchFilterBar from '@/components/SearchFilterBar';

const mockProducts = Array.from({ length: 23 }).map((_, i) => ({
  id: String(i + 1),
  name: `Sản phẩm ${i + 1}`,
  price: Math.floor(100000 + Math.random() * 600000),
  category: i % 2 === 0 ? 'đầm' : 'áo',
  image: `https://via.placeholder.com/200x300?text=SP${i + 1}`,
}));

const Products: React.FC = () => {
  const [products] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filtered = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrice =
      filterPrice === 'duoi200' ? p.price < 200000 :
      filterPrice === '200-500' ? p.price >= 200000 && p.price <= 500000 :
      filterPrice === 'tren500' ? p.price > 500000 :
      true;
    return matchName && matchPrice;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filtered.slice(start, start + itemsPerPage);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

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
        {visibleProducts.map((item) => (
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
