import React from 'react';

const SkeletonProduct = () => {
  return (
    <div className="animate-pulse p-2 border rounded">
      <div className="h-32 bg-gray-200 mb-3 rounded" />
      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  );
};

export default SkeletonProduct;
