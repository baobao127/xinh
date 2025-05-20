import React, { useEffect, useState } from 'react';

const names = ['Lan', 'Hùng', 'Ngọc', 'Minh', 'Tú', 'Hoa', 'Long'];
const locations = ['Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];
const products = ['Váy hoa vintage', 'Áo len tay dài', 'Set bộ nữ Hàn', 'Đầm ôm body', 'Áo khoác lửng', 'Quần ống rộng', 'Set croptop thể thao'];

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const PopupNotifier: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const name = getRandom(names);
      const location = getRandom(locations);
      const product = getRandom(products);
      setMessage(`"${name}" vừa mua "${product}" tại ${location}`);
      setVisible(true);

      setTimeout(() => setVisible(false), 4000);
    }, Math.random() * 300000 + 300000); // mỗi 5-10 phút

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white border shadow-lg p-3 rounded z-50 animate-fadeIn">
      <p className="text-sm text-gray-800">{message}</p>
    </div>
  );
};

export default PopupNotifier;
