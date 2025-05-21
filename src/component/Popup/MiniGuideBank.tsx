import React from 'react';

const MiniGuideBank: React.FC = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-400 p-3 rounded text-sm mt-4">
      <p><strong>Thông tin chuyển khoản:</strong></p>
      <ul className="list-disc list-inside mt-1">
        <li>Ngân hàng: MB Bank</li>
        <li>Chủ TK: NGUYEN VAN A</li>
        <li>Số TK: 123456789</li>
        <li>Nội dung: Thanh toán đơn #MãĐơn</li>
      </ul>
      <p className="mt-2 text-red-600">Sau khi chuyển, đơn hàng sẽ được xử lý trong vòng 24h.</p>
    </div>
  );
};

export default MiniGuideBank;
