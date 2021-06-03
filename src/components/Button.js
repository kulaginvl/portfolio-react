import React from 'react';
import styled from 'styled-components';

const Button = ({ title }) => {
  return <ButtonStyled>{title}</ButtonStyled>;
};

const ButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.7rem 2.5rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    transition: all 0.4s ease-in-out;
    width: 0;
    height: 0.2rem;
    left: 0;
    bottom: 0;
    opacity: 0.8;
  }

  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default Button;
