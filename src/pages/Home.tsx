import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/fakeApi';
import SkeletonProduct from '@/components/SkeletonProduct';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4">
      {/* Banner lời chào */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Chào mừng đến với Xinh Style!</h1>
        <p className="mb-4 text-gray-600">Khám phá bộ sưu tập thời trang mới nhất của chúng tôi.</p>
        <Link to="/cart" className="bg-black text-white px-4 py-2 rounded">Xem giỏ hàng</Link>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonProduct key={i} />)
          : products.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="border rounded p-2 hover:shadow transition block">
                <img src={p.image} className="w-full h-32 object-cover mb-2 rounded" alt={p.name} />
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.price.toLocaleString()} đ</p>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Home;
