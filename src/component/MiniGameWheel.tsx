import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const codes = [
  { label: 'GIẢM 10%', value: 'SALE10' },
  { label: 'FREESHIP', value: 'FREESHIP' },
  { label: 'CHÚC BẠN MAY MẮN', value: null },
];

const getRandom = () => codes[Math.floor(Math.random() * codes.length)];

const MiniGameWheel: React.FC = () => {
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleSpin = () => {
    const res = getRandom();
    setResult(res);
    if (res.value) {
      toast({ title: `Bạn nhận được: ${res.label}`, description: `Mã: ${res.value}` });
    } else {
      toast({ title: res.label || 'Không trúng', description: 'Thử lại lần sau nhé!' });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-yellow-400 px-3 py-1 rounded shadow">
        Quay số nhận mã
      </DialogTrigger>
      <DialogContent className="text-center p-4">
        <h2 className="text-lg font-bold mb-2">Quay số may mắn</h2>
        <button onClick={handleSpin} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Quay ngay
        </button>
        {result && (
          <div className="mt-4 text-sm">
            Kết quả: <strong>{result.label}</strong>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MiniGameWheel;
