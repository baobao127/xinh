import React, { useEffect, useState } from 'react';

const FlashSaleCountdown: React.FC = () => {
  const [time, setTime] = useState(3600); // 1 tiếng ảo

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm inline-block">
      Flash sale kết thúc sau: <strong>{format(time)}</strong>
    </div>
  );
};

export default FlashSaleCountdown;
