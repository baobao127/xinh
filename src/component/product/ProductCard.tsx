import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FlashSaleTimer from '../common/FlashSaleTimer';
import ProductBadge from '../common/ProductBadge';
import QuickViewModal from '../popup/QuickViewModal';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  flashSale?: boolean;
  badge?: string;
  shortDesc?: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const [quickView, setQuickView] = useState(false);

  return (
    <div className="border rounded overflow-hidden shadow hover:shadow-lg transition relative">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>

      {product.badge && <ProductBadge type={product.badge} />}
      {product.flashSale && <FlashSaleTimer />}

      <div className="p-2">
        <h3 className="text-sm font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">{product.shortDesc}</p>
        <div className="text-red-600 font-bold">{product.price.toLocaleString()} đ</div>
      </div>

      <button
        onClick={() => setQuickView(true)}
        className="absolute top-2 right-2 text-xs bg-black text-white px-2 py-1 rounded"
      >
        Xem nhanh
      </button>

      {quickView && <QuickViewModal product={product} onClose={() => setQuickView(false)} />}
    </div>
  );
};

export default ProductCard;
