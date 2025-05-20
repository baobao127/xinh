import React, { useRef } from 'react';

interface AddToCartEffectProps {
  imgRef: React.RefObject<HTMLImageElement>;
  onAnimationEnd?: () => void;
}

const AddToCartEffect: React.FC<AddToCartEffectProps> = ({ imgRef, onAnimationEnd }) => {
  const ghostRef = useRef<HTMLImageElement>(null);

  const runEffect = () => {
    if (!imgRef.current || !ghostRef.current) return;
    const img = imgRef.current.getBoundingClientRect();
    const ghost = ghostRef.current;

    ghost.src = imgRef.current.src;
    ghost.style.position = 'fixed';
    ghost.style.top = `${img.top}px`;
    ghost.style.left = `${img.left}px`;
    ghost.style.width = `${img.width}px`;
    ghost.style.height = `${img.height}px`;
    ghost.style.opacity = '1';
    ghost.style.transition = 'all 0.7s ease-in-out';
    ghost.style.zIndex = '9999';

    const cart = document.getElementById('cart-icon');
    if (!cart) return;
    const cartBox = cart.getBoundingClientRect();

    setTimeout(() => {
      ghost.style.top = `${cartBox.top}px`;
      ghost.style.left = `${cartBox.left}px`;
      ghost.style.width = '30px';
      ghost.style.height = '30px';
      ghost.style.opacity = '0.5';
    }, 10);

    setTimeout(() => {
      ghost.style.opacity = '0';
      if (onAnimationEnd) onAnimationEnd();
    }, 800);
  };

  return (
    <>
      <img ref={ghostRef} className="fixed pointer-events-none rounded-full" style={{ display: 'none' }} />
      <button onClick={runEffect} className="bg-black text-white px-3 py-1 rounded">
        Thêm vào giỏ
      </button>
    </>
  );
};

export default AddToCartEffect;
