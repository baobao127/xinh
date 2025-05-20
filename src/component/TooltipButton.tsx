import React from 'react';

interface TooltipButtonProps {
  label: string;
  tooltip: string;
  onClick?: () => void;
}

const TooltipButton: React.FC<TooltipButtonProps> = ({ label, tooltip, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group bg-blue-500 text-white px-4 py-2 rounded"
    >
      {label}
      <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
        {tooltip}
      </span>
    </button>
  );
};

export default TooltipButton;
