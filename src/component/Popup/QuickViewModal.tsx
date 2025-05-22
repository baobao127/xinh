import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✕</button>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="mt-2 font-bold">{product.price.toLocaleString()} đ</div>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">Thêm vào giỏ</button>
      </div>
    </div>
  );
};

export default QuickViewModal;
