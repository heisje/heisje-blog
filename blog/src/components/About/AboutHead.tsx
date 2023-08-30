import Head from 'next/head';
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';

const AboutHead = () => {
  return (
    <header>
      <h1>{`안녕하세요
      재사용을 고민하는
      개발자 김희제입니다.`}</h1>
      <Image src={'/images/aboutTitle.png'} alt={'소개사진'} width={300} height={300} />
      <>
        <Icon src={'https://github.com/heisje'} />
        <Icon src={'https://www.linkedin.com/in/heeje-kim-715488286/'} />
        <Icon src={'https://github.com/heisje'} />
        {/*<a href="mailto:heeje1996@gmail.com" aria-label="email">*/}
        {/*  이메일*/}
        {/*</a>*/}
      </>
    </header>
  );
};

export default AboutHead;
