import React from 'react';
import styled from 'styled-components';

const ResumeItem = ({ year, title, sitle, text }) => {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h4>{title}</h4>
        <h5>{sitle}</h5>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
};

const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 2.8rem;
  }
  .left-content {
    width: 50%;
    padding-left: 1.25rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 4.8rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 2.8rem;
      background-color: var(--border-color);
    }
    h4 {
      color: var(--primary-color);
      font-size: 2.2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.4rem;
    }
  }
`;

export default ResumeItem;
