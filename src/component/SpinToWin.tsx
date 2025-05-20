import React, { useState } from 'react';

const prizes = ['-10%', 'Freeship', 'Chúc may mắn lần sau'];

const SpinToWin: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      setResult(prizes[randomIndex]);
      setSpinning(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center w-72">
        <h2 className="text-lg font-bold mb-4">Quay số trúng mã giảm giá!</h2>

        {!result ? (
          <button
            onClick={handleSpin}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
            disabled={spinning}
          >
            {spinning ? 'Đang quay...' : 'Quay ngay'}
          </button>
        ) : (
          <div>
            <p className="text-xl font-bold text-green-600">{result}</p>
            <button
              onClick={() => setResult(null)}
              className="mt-4 text-sm underline text-blue-600"
            >
              Quay lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinToWin;
