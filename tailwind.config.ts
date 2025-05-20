import type { Config } from 'tailwindcss';

extend: {
  keyframes: {
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-2px)' },
      '75%': { transform: 'translateX(2px)' },
    },
  },
  animation: {
    shake: 'shake 0.3s ease',
  },
}
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
