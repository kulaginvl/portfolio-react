import React from 'react';
import { MainLayout } from '../styles/Layouts';
import Skills from '../components/Resume/Skills';
import Resume from '../components/Resume/Resume';

const ResumePage = () => {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
