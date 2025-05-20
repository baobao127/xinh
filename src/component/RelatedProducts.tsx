import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/fakeApi';

interface RelatedProductsProps {
  currentProductId: number;
  category?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, category }) => {
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      const filtered = data
        .filter(p => p.id !== currentProductId && (category ? p.category === category : true))
        .slice(0, 4); // Chọn 4 sản phẩm liên quan

      setRelated(filtered);
    });
  }, [currentProductId, category]);

  if (!related.length) return null;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Sản phẩm liên quan</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map(p => (
          <div key={p.id} className="border rounded p-2">
            <img src={p.image} className="w-full h-28 object-cover rounded mb-2" />
            <h4 className="text-sm font-semibold">{p.name}</h4>
            <p className="text-xs text-gray-600">{p.price} đ</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
