import React from 'react';

interface ProductBadgeProps {
  type: 'hot' | 'sale' | 'new' | string;
}

const colorMap: Record<string, string> = {
  hot: 'bg-red-500',
  sale: 'bg-yellow-500',
  new: 'bg-green-500',
};

const ProductBadge: React.FC<ProductBadgeProps> = ({ type }) => {
  const color = colorMap[type] || 'bg-gray-400';

  return (
    <div className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${color}`}>
      {type.toUpperCase()}
    </div>
  );
};

export default ProductBadge;
