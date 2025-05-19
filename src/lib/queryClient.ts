import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const apiRequest = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Lỗi khi gọi API');
  return res.json();
};
