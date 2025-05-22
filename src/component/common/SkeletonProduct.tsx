import React from 'react';

const SkeletonProduct: React.FC = () => {
  return (
    <div className="animate-pulse p-2 border rounded space-y-2">
      <div className="bg-gray-300 h-32 w-full rounded" />
      <div className="bg-gray-300 h-4 w-3/4 rounded" />
      <div className="bg-gray-300 h-4 w-1/2 rounded" />
    </div>
  );
};

export default SkeletonProduct;
