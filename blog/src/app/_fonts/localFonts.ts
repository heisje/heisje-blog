import localFont from 'next/font/local';

export const PretendardVariableWoff2 = localFont({ src: 'PretendardVariable.woff2' });

export const Pretendard = localFont({
  src: [
    {
      path: 'Pretendard-Thin.woff2',
      weight: '100',
    },
    {
      path: 'Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: 'Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: 'Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: 'Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: 'Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: 'Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: 'Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: 'Pretendard-Black.woff2',
      weight: '900',
    },
  ],
});

// const myFont = localFont({ src: '_fonts/stretchpro.otf' });
