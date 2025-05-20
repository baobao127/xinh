import React, { useState, useEffect } from 'react';

const AdminSettings: React.FC = () => {
  const [zalo, setZalo] = useState('');
  const [fanpage, setFanpage] = useState('');
  const [adminCodes, setAdminCodes] = useState<string[]>([]);

  // Load dữ liệu đã lưu
  useEffect(() => {
    const savedZalo = localStorage.getItem('zalo') || '';
    const savedFanpage = localStorage.getItem('fanpage') || '';
    const savedCodes = JSON.parse(localStorage.getItem('adminCodes') || '[]');
    setZalo(savedZalo);
    setFanpage(savedFanpage);
    setAdminCodes(savedCodes);
  }, []);

  const handleSave = () => {
    localStorage.setItem('zalo', zalo);
    localStorage.setItem('fanpage', fanpage);
    localStorage.setItem('adminCodes', JSON.stringify(adminCodes));
    alert('Lưu thành công!');
  };

  const updateCode = (index: number, value: string) => {
    const updated = [...adminCodes];
    updated[index] = value;
    setAdminCodes(updated);
  };

  const addCode = () => setAdminCodes([...adminCodes, '']);
  const removeCode = (index: number) => {
    const updated = adminCodes.filter((_, i) => i !== index);
    setAdminCodes(updated);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Cài đặt liên hệ & mã truy cập admin</h2>

      <label className="block mb-2">Số Zalo:</label>
      <input
        value={zalo}
        onChange={(e) => setZalo(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      <label className="block mb-2">Fanpage ID:</label>
      <input
        value={fanpage}
        onChange={(e) => setFanpage(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      <h3 className="font-semibold mt-6 mb-2">Mã admin để mở khoá:</h3>
      {adminCodes.map((code, i) => (
        <div key={i} className="flex items-center mb-2 gap-2">
          <input
            value={code}
            onChange={(e) => updateCode(i, e.target.value)}
            className="border p-2 rounded flex-1"
          />
          <button onClick={() => removeCode(i)} className="text-red-500">Xoá</button>
        </div>
      ))}
      <button onClick={addCode} className="text-blue-500 mb-4">+ Thêm mã</button>

      <div className="text-right">
        <button
          onClick={handleSave}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Lưu cài đặt
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
