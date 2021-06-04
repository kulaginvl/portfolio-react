import React from 'react';
import styled from 'styled-components';

const ReviewItem = ({ text }) => {
  return (
    <ReviewItemStyled>
      <p>{text}</p>
    </ReviewItemStyled>
  );
};

const ReviewItemStyled = styled.div`
  padding: 1.7rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-dark-color-2);
  position: relative;
  width: 50%;
  &:not(:first-child) {
    margin-left: 2rem;
  }
  &::after {
    content: '';
    position: absolute;
    left: 1rem;
    top: 100%;
    border-style: solid;
    border-width: 0.8rem;
    border-color: var(--background-dark-color-2) transparent transparent
      var(--background-dark-color-2);
  }
  p {
    padding: 1rem 0;
  }
`;

export default ReviewItem;
