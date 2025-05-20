import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Tự biến mất sau 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow z-50 text-sm animate-fadeIn">
      {message}
    </div>
  );
};

export default Toast;
