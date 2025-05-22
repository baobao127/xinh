import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '@/context/CartContext';
import SecretCodeInput from '@/components/SecretCodeInput';
import { useToast } from '@/hooks/useToast';
import Toast from '@/components/common/Toast';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const { message, visible, showToast } = useToast();

  const total = cart.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  if (!cart.length) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Giỏ hàng trống</p>
        <Link to="/" className="text-blue-600 underline">
          Quay lại mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {visible && <Toast message={message} type="info" />}

      <h2 className="text-xl font-bold">Giỏ hàng của bạn</h2>

      {cart.map((item: any) => (
        <div key={item.id} className="flex items-center gap-4 border-b pb-4">
          <img src={item.image} className="w-20 h-20 object-cover rounded" alt={item.name} />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.price.toLocaleString()} đ</p>
            <div className="flex items-center mt-2 gap-2">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="px-2 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
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

      <div className="text-right font-bold">
        Tổng cộng: {total.toLocaleString()} đ
      </div>

      <SecretCodeInput />

      <div className="text-right">
        <Link to="/checkout" className="bg-black text-white px-4 py-2 rounded">
          Thanh toán
        </Link>
      </div>

      <div className="text-center">
        <button
          onClick={() => showToast('Đã thêm vào giỏ hàng!')}
          className="text-sm text-green-600 underline mt-4"
        >
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default Cart;
