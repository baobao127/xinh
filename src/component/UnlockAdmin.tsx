import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UnlockAdmin: React.FC = () => {
  const [input, setInput] = useState('');
  const [codes, setCodes] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Giới hạn số lần nhập sai
  const [attempts, setAttempts] = useState(0);

  // Giả mã admin từ localStorage hoặc mã mặc định
  const storedCodes = JSON.parse(localStorage.getItem('adminCodes') || '["xanh30","giam5","freevanchuyen"]');

  const handleSubmit = () => {
    if (!input.trim()) return;

    if (storedCodes.includes(input.trim())) {
      const updated = [...codes, input.trim()];
      setCodes(updated);
      setMessage('Mã hợp lệ!');
      setInput('');

      if (updated.length === 3 && new Set(updated).size === 3) {
        localStorage.setItem('adminUnlocked', 'true');
        setMessage('Chào boss! Cửa admin đã mở...');
        setTimeout(() => navigate('/admin'), 1500);
      }
    } else {
      setAttempts((prev) => prev + 1);
      setMessage('Mã không hợp lệ!');
      setInput('');
    }
  };

  useEffect(() => {
    if (attempts >= 5) {
      setMessage('Nhập chi dữ vậy trời... nghỉ tay đi!');
      setTimeout(() => {
        setAttempts(0);
        setCodes([]);
        setMessage('');
      }, 3000);
    }
  }, [attempts]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Nhập mã ưu đãi:</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập mã giảm giá..."
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded w-full"
      >
        Xác nhận
      </button>
      {message && <p className="mt-2 text-center text-sm text-blue-600">{message}</p>}
    </div>
  );
};

export default UnlockAdmin;
