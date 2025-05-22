import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const validCodes = ['xinh30', 'giam5', 'freevanchuyen'];
const secretCodes = ['ma1x', 'ma2y', 'ma3z'];

const DiscountPopup: React.FC<{ onUnlockAdmin: () => void }> = ({ onUnlockAdmin }) => {
  const [codeInput, setCodeInput] = useState('');
  const [enteredCodes, setEnteredCodes] = useState<string[]>([]);
  const [tries, setTries] = useState(0);

  const handleCodeSubmit = () => {
    const code = codeInput.trim().toLowerCase();
    setTries((t) => t + 1);

    if (validCodes.includes(code)) {
      toast.success('Mã đã được áp dụng!');
    }

    if (secretCodes.includes(code)) {
      const updated = [...enteredCodes, code];
      setEnteredCodes(updated);
      if (updated.length >= 3 && secretCodes.every(c => updated.includes(c))) {
        toast.success('Chào Boss! Mở khoá admin thành công!');
        onUnlockAdmin();
      }
    } else {
      toast.error('Mã không hợp lệ!');
    }

    setCodeInput('');
  };

  useEffect(() => {
    if (tries >= 5) {
      toast('Nhập mã gì dữ vậy má? Thư giãn xíu đi!', { icon: '🥲' });
      setTries(0);
      setEnteredCodes([]);
    }
  }, [tries]);

  return (
    <div className="p-4 border rounded max-w-sm mx-auto bg-white shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Nhập mã giảm giá</h2>
      <input
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        placeholder="Nhập mã khuyến mãi"
        className="border p-2 w-full rounded mb-2"
      />
      <button
        onClick={handleCodeSubmit}
        className="bg-black text-white px-4 py-2 rounded w-full"
      >
        Áp dụng
      </button>
    </div>
  );
};

export default DiscountPopup;
