import React from 'react';

const ProductCard = ({ product, onQuickView }: { product: any; onQuickView: () => void }) => {
  return (
    <div className="border rounded p-2 hover:shadow transition relative">
      <img src={product.image} className="w-full h-32 object-cover mb-2 rounded" alt={product.name} />
      <h3 className="text-sm font-semibold">{product.name}</h3>
      <p className="text-xs text-gray-500 mb-2">{product.price.toLocaleString()} đ</p>
      <button
        onClick={onQuickView}
        className="absolute top-2 right-2 text-sm bg-black text-white px-2 py-1 rounded hover:bg-gray-800"
      >
        Xem nhanh
      </button>
    </div>
  );
};

export default ProductCard;
