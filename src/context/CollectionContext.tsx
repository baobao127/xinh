import React, { createContext, useContext, useEffect, useState } from 'react';

const CollectionContext = createContext<any>(null);

export const CollectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [later, setLater] = useState<any[]>([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem('wishlist') || '[]'));
    setLater(JSON.parse(localStorage.getItem('later') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('later', JSON.stringify(later));
  }, [wishlist, later]);

  const toggleWishlist = (item: any) => {
    setWishlist(prev =>
      prev.some(p => p.id === item.id) ? prev.filter(p => p.id !== item.id) : [...prev, item]
    );
  };

  const toggleLater = (item: any) => {
    setLater(prev =>
      prev.some(p => p.id === item.id) ? prev.filter(p => p.id !== item.id) : [...prev, item]
    );
  };

  return (
    <CollectionContext.Provider value={{ wishlist, later, toggleWishlist, toggleLater }}>
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollection = () => useContext(CollectionContext);
