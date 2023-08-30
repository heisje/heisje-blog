import AboutMeta from '@/components/About/AboutMeta';
import AboutHead from '@/components/About/AboutHead';
import AboutNav from '@/components/About/AboutNav';
import AboutTimestamps from '@/components/About/AboutTimestamps';
import AboutAwards from '@/components/About/AboutAwards';
import AboutProjects from '@/components/About/AboutProjects';

function AboutStack() {
  return null;
}

export default function About() {
  return (
    <>
      <AboutHead />
      <AboutMeta />
      <AboutNav />
      <AboutTimestamps />
      <AboutStack />
      <AboutAwards />
      <AboutProjects />
    </>
  );
}
