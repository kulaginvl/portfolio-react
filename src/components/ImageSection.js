import React from 'react';
import styled from 'styled-components';
import sectionImg from '../assets/img/img-section.jpg';
import Button from './Button';

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={sectionImg} alt="img" />
      </div>
      <div className="right-content">
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
        <Button title={'Download'} />
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;

  .left-content {
    width: 150%;
    img {
      width: 90%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .pargraph {
      padding: 1rem 0;
    }
    .a-inf {
      display: flex;
      padding-bottom: 1rem;

      .inf-title {
        padding-right: 2rem;
        p {
          font-weight: 600;
        }
      }
      .inf-title,
      .inf {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
