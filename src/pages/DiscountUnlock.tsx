import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const secretCodes = ['xanh30', 'giam5', 'freevanchuyen'];

const DiscountUnlock: React.FC = () => {
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState<string[]>([]);
  const [failCount, setFailCount] = useState(0);
  const navigate = useNavigate();

  const checkCode = () => {
    if (failCount >= 5) {
      toast({ title: 'Spam rồi đó!', description: 'Thử lại sau nha má' });
      return;
    }

    if (secretCodes.includes(input.trim().toLowerCase())) {
      const updated = [...attempts, input.trim().toLowerCase()];
      setAttempts(updated);
      setInput('');

      if (updated.length === 3 && secretCodes.every(c => updated.includes(c))) {
        toast({ title: 'Boss đã về!', description: 'Đang mở cửa admin...' });
        localStorage.setItem('adminAccess', 'true');
        setTimeout(() => navigate('/admin/products'), 800);
      } else {
        toast({ title: 'OK!', description: `Còn thiếu ${3 - updated.length} mã nữa` });
      }
    } else {
      setFailCount(f => f + 1);
      toast({ title: 'Sai rồi!', description: 'Không phải mã khuyến mãi hợp lệ' });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Nhập mã khuyến mãi</h2>
      <input
        type="text"
        className="border rounded px-3 py-2 w-full mb-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập mã..."
      />
      <button onClick={checkCode} className="bg-black text-white px-4 py-2 rounded">
        Kiểm tra
      </button>
    </div>
  );
};

export default DiscountUnlock;
