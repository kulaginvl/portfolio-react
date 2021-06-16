import React from 'react';
import styled from 'styled-components';

const Progres = ({ title, width, text }) => {
  return (
    <ProgreStyled>
      <h5>{title}</h5>
      <div className="progres-bar">
        <p>{text}</p>
        <div className="progres">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgreStyled>
  );
};

const ProgreStyled = styled.div`
  .progres-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1rem;
    }
    .progres {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primary-color);
      }
    }
  }
`;

export default Progres;
