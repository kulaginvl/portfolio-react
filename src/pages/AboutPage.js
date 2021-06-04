import React from 'react';
import styled from 'styled-components';
import TitleBlock from '../components/TitleBlock';
import ImageSection from '../components/ImageSection';
import { MainLayout } from '../styles/Layouts';
import ServicesSection from '../components/ServicesSection';
import ReviewsSection from '../components/ReviewsSection';

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <TitleBlock title={'About Me'} span={'About Me'} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
};

const AboutStyled = styled.section``;

export default AboutPage;
