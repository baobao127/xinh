import React, { useState } from 'react';

const coupons = ['-10%', 'Free Ship', 'Chúc bạn may mắn lần sau'];

const MiniGameCoupon: React.FC = () => {
  const [result, setResult] = useState('');
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      const random = Math.floor(Math.random() * coupons.length);
      setResult(coupons[random]);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="text-center my-6">
      <h2 className="text-lg font-semibold mb-2">Mini Game: Quay số trúng mã giảm giá</h2>
      <button
        onClick={handleSpin}
        disabled={spinning}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
      >
        {spinning ? 'Đang quay...' : 'Quay ngay'}
      </button>
      {result && <p className="mt-4 text-green-600 text-xl font-bold">{result}</p>}
    </div>
  );
};

export default MiniGameCoupon;
