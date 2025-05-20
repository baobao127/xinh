import React, { createContext, useContext, useEffect, useState } from 'react';

const OrdersContext = createContext<any>(null);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('orders');
    if (stored) setOrders(JSON.parse(stored));
  }, []);

  const clearOrders = () => {
    localStorage.removeItem('orders');
    setOrders([]);
  };

  return (
    <OrdersContext.Provider value={{ orders, clearOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
