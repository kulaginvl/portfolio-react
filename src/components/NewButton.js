import React from 'react';
import styled from 'styled-components';

const NewButton = ({ filter, button }) => {
  return (
    <NewButtonsStyled>
      {button.map((butt, index) => {
        return (
          <NewButtonStyled key={index} onClick={() => filter(butt)}>
            {butt}
          </NewButtonStyled>
        );
      })}
    </NewButtonsStyled>
  );
};

const NewButtonsStyled = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  margin: 2.2rem auto;
`;
const NewButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.3rem 2rem;
  font-size: inherit;

  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

export default NewButton;
