import React, { useEffect, useState } from 'react';

const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((item, i) => (
          <li key={i} className="border p-4 rounded shadow">
            <h3 className="font-bold">{item.name}</h3>
            <p>Giá: {item.price}đ</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProducts;
