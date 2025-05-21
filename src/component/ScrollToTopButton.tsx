import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false); // giữ nguyên visible

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      setShow(shouldShow);
      setVisible(shouldShow); // giữ visible cho bạn dùng trong return
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Lên đầu trang"
      className="fixed bottom-6 right-6 z-50 cursor-pointer text-[28px] text-pink-500 hover:text-pink-600"
    >
      <FaArrowCircleUp />
    </button>
  ) : null;
};

export default ScrollToTopButton;
