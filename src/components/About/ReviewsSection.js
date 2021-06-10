import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import ReviewItem from './ReviewItem';
import TitleBlock from '../TitleBlock';

const ReviewsSection = () => {
  return (
    <ReviewsSectionStyled>
      <TitleBlock title={'Reviews'} span={'Reviews'} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              'Nostrud tempor eu eu aliquip ipsum fugiat magna deserunt excepteur amet deserunt.'
            }
          />
          <ReviewItem
            text={
              'Nostrud tempor eu eu aliquip ipsum fugiat magna deserunt excepteur amet deserunt.Eiusmod magna ex duis ullamco et non nulla ullamco minim.'
            }
          />
        </div>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
};

const ReviewsSectionStyled = styled.section`
  .reviews {
    display: flex;
  }
`;

export default ReviewsSection;
