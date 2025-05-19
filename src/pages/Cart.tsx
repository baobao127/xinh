import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item, i) => (
              <li key={i} className="border p-2 rounded">{item.name} - {item.price}đ</li>
            ))}
          </ul>
          <Link to="/checkout" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Thanh toán
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
