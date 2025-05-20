import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [show, setShow, visible] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return visible ?(
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Lên đầu trang"
      className="fixed bottom-5 right-5 bg-black text-white p-3 rounded-full shadow hover:bg-gray-800 z-50"
    >
      <ChevronUp size={20} />
    </button>
  ); null;
};

export default ScrollToTopButton;
