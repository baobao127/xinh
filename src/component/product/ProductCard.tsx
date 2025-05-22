import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/component/ui/Badge';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  isHot?: boolean;
  isNew?: boolean;
  sold?: number;
}

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <div className="border rounded p-2 hover:shadow-md transition relative group">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-2 font-semibold text-sm">{product.name}</h3>
        <p className="text-xs text-gray-500">{formatCurrency(product.price)} đ</p>
      </Link>

      {/* Badge */}
      <div className="absolute top-2 left-2 space-y-1">
        {product.isHot && <Badge variant="hot">HOT</Badge>}
        {product.isNew && <Badge variant="new">NEW</Badge>}
        {product.sold && (
          <Badge variant="sold">Đã bán {product.sold}+</Badge>
        )}
      </div>

      {/* Quick View nút hiện khi hover */}
      {onQuickView && (
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-2 right-2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          Xem nhanh
        </button>
      )}
    </div>
  );
};

export default ProductCard;
