import React, { useEffect, useState } from 'react';

const ComingFromZaloPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ref = document.referrer;
    if (ref.includes('zalo')) {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-2 left-2 bg-blue-500 text-white px-3 py-2 rounded shadow">
      Chào bạn từ Zalo, giảm 10% đơn đầu!
    </div>
  );
};

export default ComingFromZaloPopup;
