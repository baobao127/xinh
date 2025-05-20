import { useState } from 'react';
import React from 'react';
import { useState } from 'react';

export const useToast = () => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (msg: string, duration = 2000) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), duration);
  };

  return { message, visible, showToast };
};

const PopupToast = ({ message, visible }: { message: string, visible: boolean }) => {
  if (!visible) return null;
  return (
    <div className="fixed bottom-10 right-4 bg-black text-white px-4 py-2 rounded shadow z-50">
      {message}
    </div>
  );
};



export const useToast = () => {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string, duration = 3000) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  };

  const Toast = () =>
    toast ? (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow z-50">
        {toast}
      </div>
    ) : null;

  return { showToast, Toast };
};
