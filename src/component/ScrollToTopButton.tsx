import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 z-50 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
