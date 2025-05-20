import React from 'react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  if (!cart.length)
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Giỏ hàng trống</p>
        <Link to="/" className="text-blue-600 underline">Quay lại mua sắm</Link>
      </div>
    );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Giỏ hàng của bạn</h2>
      <div className="space-y-4">
        {cart.map((item: any) => (
          <div key={item.id} className="flex gap-4 border-b pb-4">
            <img src={item.image} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price} đ</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-2 border rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 text-sm"
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right font-bold">
        Tổng cộng: {total.toLocaleString()} đ
      </div>

      <div className="mt-4 text-right">
        <Link to="/checkout" className="bg-black text-white px-4 py-2 rounded">
          Thanh toán
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
