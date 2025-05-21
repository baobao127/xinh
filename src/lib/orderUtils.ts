export const getAllOrders = (): any[] => {
  return JSON.parse(localStorage.getItem('orders') || '[]').reverse();
};

export const updateOrderStatus = (id: number, newStatus: string) => {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const updated = orders.map((o: any) =>
    o.id === id ? { ...o, status: newStatus } : o
  );
  localStorage.setItem('orders', JSON.stringify(updated));
};
