import { useState } from 'react';

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
