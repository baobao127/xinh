import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 px-4 py-2 rounded shadow text-white ${
        type === 'success' ? 'bg-green-600' : 'bg-red-500'
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
