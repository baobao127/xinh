import React, { useEffect, useState } from 'react';

const names = ['Linh', 'Hùng', 'Trang', 'Tuấn', 'Vy', 'Minh', 'Hải'];
const cities = ['Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Cần Thơ'];
const products = ['Đầm ôm', 'Áo croptop', 'Chân váy', 'Áo hoodie'];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const FakePurchasePopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [popupData, setPopupData] = useState({ name: '', city: '', product: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupData({
        name: getRandomItem(names),
        city: getRandomItem(cities),
        product: getRandomItem(products),
      });
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    }, 1000 * 60 * 7); // 7 phút fake

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg px-4 py-2 rounded text-sm z-50 border">
      {popupData.name} ở {popupData.city} vừa mua {popupData.product}
    </div>
  );
};

export default FakePurchasePopup;
