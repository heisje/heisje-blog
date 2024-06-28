import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: 'Pretendard, system-ui, Noto Sans KR', // Adds a new `font-display` class
    },

    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp0: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-3rem)' },
        },
        slideUp1: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-13rem)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideUp0: 'slideUp0 1s ease-in-out forwards',
        slideUp1: 'slideUp1 1s ease-in-out forwards',
      },
      colors: {
        // custom gray = zinc
        'c-gray-50': 'rgb(250 250 250)',
        'c-gray-100': 'rgb(244 244 245)',
        'c-gray-200': 'rgb(228 228 231)',
        'c-gray-300': 'rgb(212 212 216)',
        'c-gray-400': 'rgb(161 161 170)',
        'c-gray-500': 'rgb(113 113 122)',
        'c-gray-600': 'rgb(82 82 91)',
        'c-gray-700': 'rgb(63 63 70)',
        'c-gray-800': 'rgb(39 39 42)',
        'c-gray-900': 'rgb(24 24 27)',
        'c-gray-950': 'rgb(9 9 11)',

        // primary = blue
        primary: 'rgb(96 165 250)',
        'primary-50': 'rgb(239 246 255)',
        'primary-100': 'rgb(219 234 254)',
        'primary-200': 'rgb(191 219 254)',
        'primary-300': 'rgb(147 197 253)',
        'primary-400': 'rgb(96 165 250)',
        'primary-500': 'rgb(59 130 246)',
        'primary-600': 'rgb(37 99 235)',
        'primary-700': 'rgb(29 78 216)',
        'primary-800': 'rgb(30 64 175)',
        'primary-900': 'rgb(30 58 138)',
        'primary-950': 'rgb(23 37 84)',
        Secondary: '',
        danger: '',
        warning: '',
        success: '',
        info: '',

        // secondary: '#ec4899', // 보조색상
        light: {
          pop: 'rgb(29 78 216)',
        },
        dark: {
          pop: 'rgb(113 113 122)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
