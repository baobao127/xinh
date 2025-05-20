import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { fetchProducts } from '@/lib/fakeApi';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      const found = data.find((item: any) => String(item.id) === id);
      if (!found) {
        navigate('/'); // fallback nếu ko tìm thấy
      } else {
        setProduct(found);
      }
    });
  }, [id]);

  if (!product) return <p className="p-4 text-center">Đang tải sản phẩm...</p>;

  const handleAdd = () => {
    addToCart({ ...product, quantity: 1 });
    alert('Đã thêm vào giỏ!');
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description || 'Không có mô tả'}</p>
      <p className="text-lg font-semibold mb-4">{product.price} đ</p>
      <button onClick={handleAdd} className="bg-black text-white px-4 py-2 rounded">
        Thêm vào giỏ
      <RelatedProducts currentProductId={product.id} category={product.category} />
      </button>
    </div>
  );
};

export default ProductDetail;
