import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServicesCard from './ServicesCard';
import Title from './Title';

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={'Services'} span={'services'} />
        <div className="services">
          <ServicesCard
            image={null}
            title={'Web'}
            paragraph={'Non mollit in ea mollit nulla voluptate ad cillum est sit.'}
          />
          <ServicesCard
            image={null}
            title={'Art'}
            paragraph={'Non mollit in ea mollit nulla voluptate ad cillum est sit.'}
          />
          <ServicesCard
            image={null}
            title={'Dev'}
            paragraph={'Non mollit in ea mollit nulla voluptate ad cillum est sit.'}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section``;

export default ServicesSection;
