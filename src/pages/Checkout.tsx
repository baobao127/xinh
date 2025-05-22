
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { saveOrder } from '@/lib/OrderUtils';
import Toast from '@/components/common/Toast';


const Success: React.FC = () => {
  const [status, setStatus] = useState('Đang xử lý đơn hàng...');

  useEffect(() => {
    const orderStatus = localStorage.getItem('orderStatus') || 'processing';
    if (orderStatus === 'waitingBank') {
      setStatus('Đang chờ thanh toán chuyển khoản');
    } else if (orderStatus === 'processing') {
      setStatus('Đơn hàng đang được xử lý');
    } else {
      setStatus('Đơn hàng đã được ghi nhận');
    }
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Đặt hàng thành công!</h1>
      <p className="text-gray-700 mb-4">{status}</p>
      <Link to="/" className="text-blue-600 underline">Về trang chủ</Link>
    </div>
  );
};

const Checkout: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('cod');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sentTelegram, setSentTelegram] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) navigate('/cart');
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address) {
      setError('Vui lòng nhập đầy đủ họ tên và địa chỉ.');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newOrder = {
      id: Date.now(),
      name,
      address,
      paymentMethod: payment,
      items: cart,
      createdAt: new Date().toISOString(),
    };

    // Lưu localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
    localStorage.removeItem('cart');
    localStorage.setItem('orderStatus', 'processing');

    // Gửi Telegram (nếu chưa gửi)
    if (!sentTelegram) {
      // --- CHỖ GẮN TELEGRAM WEBHOOK ---
      // await sendTelegramMessage(formatOrderMessage(newOrder));
      setSentTelegram(true);
    }

    setSubmitting(true);
    setTimeout(() => {
      navigate('/success');
    }, 700);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Thanh toán</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Họ tên người nhận"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Địa chỉ giao hàng"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="cod">Thanh toán khi nhận hàng (COD)</option>
          <option value="bank">Chuyển khoản ngân hàng</option>
        </select>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {submitting ? 'Đang xử lý...' : 'Xác nhận đặt hàng'}
        </button>
      </form>
    </div>
  );
};


const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('cod');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address) {
      setError('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    const order = {
      id: Date.now(),
      name,
      address,
      payment,
      items: cart,
      status: 'processing',
      createdAt: new Date().toISOString(),
    };

    saveOrder(order);
    clearCart();
    localStorage.setItem('lastOrder', JSON.stringify(order));
    setShowToast(true);

    setTimeout(() => {
      navigate('/success');
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {showToast && <Toast message="Đặt hàng thành công!" />}
      <h2 className="text-2xl font-bold mb-4">Thông tin đặt hàng</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Họ tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="cod">Thanh toán khi nhận hàng</option>
          <option value="bank">Chuyển khoản ngân hàng</option>
        </select>
        <button className="bg-black text-white px-4 py-2 rounded w-full">Xác nhận đơn hàng</button>
      </form>
    </div>
  );
};

export default Checkout;
