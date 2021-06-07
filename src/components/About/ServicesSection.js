import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServicesCard from './ServicesCard';
import TitleBlock from './TitleBlock';
import heart from '../assets/img/heart.png';

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <TitleBlock title={'Services'} span={'services'} />
        <div className="services">
          <ServicesCard
            image={heart}
            title={'Web'}
            paragraph={'Non mollit in ea mollit nulla voluptate ad cillum est sit.'}
          />
          <div className="mid-card">
            <ServicesCard
              image={heart}
              title={'Art'}
              paragraph={'Non mollit in ea mollit nulla voluptate ad cillum est sit.'}
            />
          </div>
          <ServicesCard
            image={heart}
            title={'Dev'}
            paragraph={'Non mollit in ea mollit nulla voluptate ad cillum est sit.'}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
  }
  .mid-card {
    margin: 0 1rem;
  }
`;

export default ServicesSection;
