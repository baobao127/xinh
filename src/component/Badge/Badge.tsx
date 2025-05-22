import React from 'react';

interface BadgeProps {
  label: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, color = 'bg-red-500' }) => {
  return (
    <span className={`text-xs ${color} text-white px-2 py-1 rounded absolute top-2 left-2`}>
      {label}
    </span>
  );
};

export default Badge;
