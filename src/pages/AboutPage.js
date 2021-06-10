import React from 'react';
import styled from 'styled-components';
import TitleBlock from '../components/TitleBlock';
import ImageSection from '../components/About/ImageSection';
import { MainLayout } from '../styles/Layouts';
import ServicesSection from '../components/About/ServicesSection';
import ReviewsSection from '../components/About/ReviewsSection';

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
