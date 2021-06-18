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

const ResumeItemStyled = styled.div``;

export default ResumeItem;
