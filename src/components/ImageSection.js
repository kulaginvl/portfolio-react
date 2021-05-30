import React from 'react';
import styled from 'styled-components';

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={null} alt="img" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            I am <span>Vlad</span>
          </h4>
          <p className="pargraph">
            Quis et cillum enim reprehenderit veniam incididunt pariatur qui laborum ex voluptate
            excepteur. Cillum eu incididunt eu cupidatat eiusmod sunt aliquip et exercitation. Lorem
            proident quis sit aute dolor do.
          </p>
          <div className="a-inf">
            <div className="inf-title">
              <p>Full Name</p>
              <p>Age</p>
              <p>Languages</p>
              <p>Location</p>
            </div>
            <div className="inf">
              <p>: Vladislav</p>
              <p>: 22</p>
              <p>: Rus, Eng</p>
              <p>: Russia</p>
            </div>
          </div>
        </div>
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div``;

export default ImageSection;
