import React from 'react';
import { useParams } from 'react-router-dom';

const mockProducts = [
  {
    id: '1',
    name: 'Đầm ôm body ngắn tay',
    price: 220000,
    image: 'https://via.placeholder.com/300x400?text=Đầm+ôm',
    description: 'Đầm ôm body ngắn tay, chất vải co giãn thoải mái, tôn dáng.',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Áo khoác dù basic',
    price: 199000,
    image: 'https://via.placeholder.com/300x400?text=Áo+khoác',
    description: 'Áo khoác gió basic, dễ phối đồ, chống nắng nhẹ.',
    rating: 4.2,
  },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === id);

  if (!product) return <p className="p-4">Sản phẩm không tồn tại</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl text-red-600">{product.price.toLocaleString()}đ</p>
        <p>{product.description}</p>
        <div>
          Đánh giá:{' '}
          <span className="text-yellow-500">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </span>{' '}
          ({product.rating}/5)
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
