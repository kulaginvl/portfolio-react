import React from 'react';
import styled from 'styled-components';
import TitleBlock from '../TitleBlock';

import { MainLayout, InnerLayout } from '../../styles/Layouts';

const Resume = () => {
  return (
    <MainLayout>
      <ResumeStyled>
        <TitleBlock title="Resume" span="Resume" />

        <InnerLayout></InnerLayout>
      </ResumeStyled>
    </MainLayout>
  );
};

const ResumeStyled = styled.section``;

export default Resume;
