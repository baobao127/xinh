export const fetchProducts = async () => {
  await new Promise((r) => setTimeout(r, 300)); // fake delay
  const res = await fetch('/products.json');
  return await res.json();
};
