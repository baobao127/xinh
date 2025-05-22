import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchProducts } from '@/lib/fakeApi';
import SkeletonProduct from '@/components/SkeletonProduct';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import SpinToWin from '@/components/SpinToWin';
import MiniGameWheel from '@/components/MiniGameWheel';
import Toast from '@/components/common/Toast';
import { useErrorBoundary } from '@/hooks/useErrorBoundary';
import { useToast } from '@/hooks/useToast';

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [quickProduct, setQuickProduct] = useState<any | null>(null);
  const [showSpin, setShowSpin] = useState(false);

  const { error, catchError } = useErrorBoundary();
  const { message, visible, showToast } = useToast();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(catchError);
  }, []);

  return (
    <div className="p-4">
      {visible && <Toast message={message} type="info" />}
      {error && <Toast message={error} type="error" />}
      {showSpin && <SpinToWin />}
      <MiniGameWheel />

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Chào mừng đến với Xinh Style!</h1>
        <p className="mb-4 text-gray-600">Khám phá bộ sưu tập thời trang mới nhất của chúng tôi.</p>
        <Link to="/cart" className="bg-black text-white px-4 py-2 rounded">
          Xem giỏ hàng
        </Link>
        <div className="mt-4 space-x-4">
          <button onClick={() => setShowSpin(true)} className="text-sm text-red-500 underline">
            Thử vận may nhận mã giảm giá
          </button>
          <button onClick={() => showToast('Đã thêm vào giỏ hàng!')} className="text-sm text-green-500 underline">
            Mua ngay
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonProduct key={i} />)
          : products.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={() => setQuickProduct(p)} />
            ))}
      </div>

      {quickProduct && (
        <QuickViewModal product={quickProduct} onClose={() => setQuickProduct(null)} />
      )}
    </div>
  );
};

export default Home;
