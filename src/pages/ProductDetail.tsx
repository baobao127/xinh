import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { fetchProducts } from '@/lib/fakeApi';
import { useErrorBoundary } from '@/hooks/useErrorBoundary';
import Toast from '@/components/common/Toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const { error, catchError } = useErrorBoundary();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        const found = data.find((p: any) => String(p.id) === id);
        if (!found) throw new Error('Không tìm thấy sản phẩm');
        setProduct(found);
      })
      .catch(catchError);
  }, [id]);

  if (error) return <Toast message={error} type="error" />;

  if (!product) return <div className="p-4">Đang tải chi tiết sản phẩm...</div>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg text-red-500 font-semibold mt-2">{product.price} đ</p>
    </div>
  );
};

export default ProductDetail;;
