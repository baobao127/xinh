export const formatCurrency = (value: number): string =>
  value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateRandomName = (): string => {
  const names = ['Tý Sún', 'Lan Anh', 'Bảo Bối', 'Phúc Hắc', 'Hằng Nga', 'Minh Lúa'];
  return names[Math.floor(Math.random() * names.length)];
};

export const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
