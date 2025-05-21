import React from 'react';

const HotBadge: React.FC = () => {
  return (
    <span className="absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded shadow">
      HOT
    </span>
  );
};

export default HotBadge;
