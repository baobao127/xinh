import React from 'react';

const QuickViewModal = ({ product, onClose }: { product: any; onClose: () => void }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded max-w-md w-full relative shadow">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">×</button>
        <img src={product.image} className="w-full h-48 object-cover rounded mb-4" alt={product.name} />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{product.description || 'Không có mô tả'}</p>
        <p className="text-lg font-semibold mb-4 text-red-500">{product.price.toLocaleString()} đ</p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Thêm vào giỏ</button>
      </div>
    </div>
  );
};

export default QuickViewModal;
