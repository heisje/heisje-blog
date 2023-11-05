import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: 'system-ui, Pretendard, Noto Sans KR', // Adds a new `font-display` class
    },

    extend: {
      colors: {
        // 여기에 당신의 색상을 정의할 수 있습니다.
        // dark: '#1f2937',
        // light: '#ffffff',
        // primary: '#a855f7', // 예시로 주황색 계열의 색상을 primary라고 명명했습니다.
        // secondary: '#ec4899', // 보조색상
      },
    },
  },
  plugins: [],
};
export default config;
