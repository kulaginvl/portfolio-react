import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particles />
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export default HomePage;
