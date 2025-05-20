import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const fakeUsers = ['Lan', 'Hùng', 'Tý', 'My', 'Tuấn', 'Hà', 'Ngọc', 'Trung', 'Thảo'];
const fakeCities = ['Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng'];
const fakeLocations = ['Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng'];
const fakeProducts = [
  'Đầm maxi đỏ', 'Áo sơ mi tay phồng', 'Váy công sở caro', 'Quần baggy kèm belt',
  'Set vest 2 dây', 'Áo hoodie freesize', 'Chân váy ngắn lưng cao'
];

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const FakePurchasePopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState('');
  const [popupText, setPopupText] = useState('');

  useEffect(() => {
    const timer = setTimer(() => {
      const product = getRandom(fakeProducts);
      const city = getRandom(fakeLocations);
      const text = `${getRandom(fakeUsers)} ở ${getRandom(fakeCities)} vừa mua ${getRandom(fakeProducts)}.`;
      setPopupText(text);
      setContent(`${user} ở ${city} vừa mua ${product}`);
      setVisible(true);
      setShow(true);

      setTimeout(() => setVisible(false), 6000);
    }, 15000 + Math.random() * 30000); // delay ngẫu nhiên 15s–45s

    return () => clearTimeout(timer);
  }, [visible]);
    if (!show) return null;

  return (
    <div className={clsx(
      "fixed bottom-6 left-6 bg-white shadow-lg rounded px-4 py-3 text-sm text-gray-700 transition-all duration-500 z-50",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
    )}>
      <span>{popupText}</span>
    </div>
  );
};

export default FakePurchasePopup;
