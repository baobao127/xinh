import React, { useState } from 'react';

const codes = ['GIAM10', 'FREESHIP', 'XINHSTYLE'];

const DiscountPopup: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [code, setCode] = useState('');

  const randomCode = () => {
    const selected = codes[Math.floor(Math.random() * codes.length)];
    setCode(selected);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-10 right-10 bg-white border shadow-lg p-4 rounded z-50 w-72">
      <h3 className="font-bold mb-2">Quay số nhận mã giảm giá!</h3>
      {code ? (
        <div className="text-center">
          <p className="text-lg font-semibold">{code}</p>
          <p className="text-xs text-gray-500 mt-2">Copy mã để dùng khi thanh toán</p>
          <button className="mt-3 text-sm text-red-500" onClick={() => setVisible(false)}>Đóng</button>
        </div>
      ) : (
        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={randomCode}
        >
          Quay Ngay
        </button>
      )}
    </div>
  );
};

export default DiscountPopup;
