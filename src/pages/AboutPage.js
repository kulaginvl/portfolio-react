import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import { MainLayout } from '../styles/Layouts';
import ServicesSection from '../components/ServicesSection';

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About Me'} span={'About Me'} />
        <ImageSection />
        <ServicesSection />
      </AboutStyled>
    </MainLayout>
  );
};

const AboutStyled = styled.section``;

export default AboutPage;
