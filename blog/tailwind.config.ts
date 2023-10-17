import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: 'Pretendard, system-ui, Noto Sans KR', // Adds a new `font-display` class
    },가
    extend: {},
  },
  plugins: [],
};
export default config;
