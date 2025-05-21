import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SkeletonProduct from './SkeletonProduct';

const Productlist = ({ products }: any) => {
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState('grid'); // Chế độ hiển thị: grid hoặc list

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={
        view === 'grid'
          ? 'grid grid-cols-2 gap-[6px] md:grid-cols-4 md:gap-3 lg:grid-cols-6'
          : 'flex flex-col gap-3'
      }
    >
      {loaded
        ? products?.map((item: any, index: number) => (
            <ProductCard key={index} data={item} view={view} />
          ))
        : Array.from({ length: 10 }).map((_, index) => (
            <SkeletonProduct key={index} view={view} />
          ))}
    </div>
  );
};

export default Productlist;
