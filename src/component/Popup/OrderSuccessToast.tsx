import React from 'react';

const OrderSuccessToast: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
      Đặt hàng thành công!
    </div>
  );
};

export default OrderSuccessToast;
