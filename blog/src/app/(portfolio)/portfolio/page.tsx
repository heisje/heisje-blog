import React from 'react';
import PortfolioNav from './_components/PortfolioNav';
import PortfolioMain from './_components/PortfolioMain';
import PortfolioTimeline from './_components/PortfolioTimeline';
import ProjectsProvider from '@/app/(portfolio)/portfolio/_components/ProjectsProvider';

export default function HomePage() {
  return (
    <>
      <PortfolioNav />
      <PortfolioMain />
      <ProjectsProvider />

      <PortfolioTimeline />
    </>
  );
}
