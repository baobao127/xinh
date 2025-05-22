import React from 'react';

interface BadgeProps {
  type: 'hot' | 'sale' | 'new';
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  const text = type === 'hot' ? 'Hot' : type === 'sale' ? 'Sale' : 'Mới';
  const color = type === 'hot' ? 'bg-red-500' : type === 'sale' ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${color}`}>
      {text}
    </div>
  );
};

export default Badge;
