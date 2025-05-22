import React, { useEffect, useState } from 'react';

const FlashSaleTimer: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 phút giả trân

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="absolute bottom-2 left-2 text-xs bg-black text-white px-2 py-1 rounded">
      Sale còn: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default FlashSaleTimer;
