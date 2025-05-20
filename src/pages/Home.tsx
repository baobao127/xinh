import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/fakeApi';
import SkeletonProduct from '@/components/SkeletonProduct';
import { Link } from 'react-router-dom';
import QuickViewModal from '@/components/QuickViewModal';
import ProductCard from '@/components/ProductCard';
import SpinToWin from '@/components/SpinToWin';
import MiniGameWheel from '@/components/MiniGameWheel';

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [quickProduct, setQuickProduct] = useState<any | null>(null);
  const [showSpin, setShowSpin] = useState(false);
  {showSpin && <SpinToWin />}
<button 
  onClick={() => setShowSpin(true)} className="text-sm text-red-500 underline">
  Thử vận may nhận mã giảm giá
</button>
  <MiniGameWheel />

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
              <ProductCard key={p.id} product={p} onQuickView={() => setQuickProduct(p)} />
            ))}
      </div>

      {/* Modal xem nhanh */}
      {quickProduct && (
        <QuickViewModal product={quickProduct} onClose={() => setQuickProduct(null)} />
      )}
    </div>
  );
};
{loading
  ? Array.from({ length: 8 }).map((_, i) => <SkeletonProduct key={i} />)
  : products.map(...) }
export default Home;
