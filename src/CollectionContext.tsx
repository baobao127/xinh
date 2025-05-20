import React, { createContext, useContext, useState, useEffect } from 'react';

type Item = {
  id: string;
  name: string;
  image: string;
};

interface CollectionContextProps {
  wishlist: Item[];
  addToWishlist: (item: Item) => void;
  removeFromWishlist: (id: string) => void;
}

const CollectionContext = createContext<CollectionContextProps | null>(null);

export const CollectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Item[]>(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item: Item) => {
    if (!wishlist.find((i) => i.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((i) => i.id !== id));
  };

  return (
    <CollectionContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollection = () => useContext(CollectionContext)!;
