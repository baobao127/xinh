import React, { useEffect, useState } from 'react';

const OfflineWarning = () => {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-400 text-black text-center p-2 z-50">
      Bạn đang offline. Một số chức năng có thể không hoạt động.
    </div>
  );
};

export default OfflineWarning;
