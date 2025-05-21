import React, { useState } from 'react';

const SecretCodeInput: React.FC = () => {
  const [codeInput, setCodeInput] = useState('');
  const [codeStack, setCodeStack] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const secretCodes = ['xanh30', 'giam5', 'freevanchuyen'];
  const maxTries = 5;
  const [tries, setTries] = useState(0);

  const handleCodeSubmit = () => {
    const cleanCode = codeInput.trim().toLowerCase();
    setCodeInput('');

    if (!cleanCode) return;

    const newStack = [...codeStack, cleanCode];
    if (newStack.length > 3) newStack.shift();
    setCodeStack(newStack);
    setTries((prev) => prev + 1);

    const isMatch = secretCodes.every((code) => newStack.includes(code));
    if (isMatch) {
      localStorage.setItem('adminMode', 'true');
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/admin';
      }, 1200);
    } else if (tries >= maxTries - 1) {
      setError('Nhập nhiều quá rồi đó má ơi, nghỉ đi chơi chút!');
      setCodeStack([]);
      setTries(0);
    } else {
      setError('Mã không hợp lệ hoặc chưa đủ. Thử tiếp nha!');
    }
  };

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow-sm">
      <h4 className="text-sm font-semibold mb-2">Mã ưu đãi (ẩn)</h4>
      <input
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        placeholder="Nhập mã giảm giá"
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleCodeSubmit}
        className="bg-black text-white px-4 py-2 rounded w-full"
      >
        Áp dụng mã
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-600 text-sm mt-2">Cửa bí mật đã mở… Boss đang vào!</p>}
    </div>
  );
};

export default SecretCodeInput;
