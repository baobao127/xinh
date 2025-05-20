export const getAllOrders = () => {
  return JSON.parse(localStorage.getItem('orders') || '[]');
};

export const updateOrderStatus = (id: number, newStatus: string) => {
  const orders = getAllOrders();
  const updated = orders.map((o: any) =>
    o.id === id ? { ...o, status: newStatus } : o
  );
  localStorage.setItem('orders', JSON.stringify(updated));
  return updated;
};
