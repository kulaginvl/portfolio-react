import React from 'react';
import styled from 'styled-components';

const ServicesCard = ({ image, title, paragraph }) => {
  return (
    <ServicesCardStyled>
      <div className="container">
        <img src={image} alt="img" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServicesCardStyled>
  );
};

const ServicesCardStyled = styled.div``;

export default ServicesCard;
