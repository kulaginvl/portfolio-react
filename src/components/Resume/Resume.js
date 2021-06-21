import React from 'react';
import styled from 'styled-components';
import TitleBlock from '../TitleBlock';
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

import SmallTitleStyled from '../SmallTitle';
import ResumeItem from './ResumeItem';

import { InnerLayout } from '../../styles/Layouts';

const Resume = () => {
  const briface = <WorkIcon />;
  const educational = <CastForEducationIcon />;
  return (
    <ResumeStyled>
      <TitleBlock title="Resume" span="Resume" />

      <InnerLayout>
        <div className="small-title">
          <SmallTitleStyled icon={briface} title={'Working Experince'} />
        </div>
        <div className="content-resume">
          <ResumeItem
            year={'2019 - 2021'}
            title={'Frontend Devoloper'}
            subTitle={'KNITY'}
            text={
              'Quis velit ut laborum tempor et esse incididunt velit nulla tempor proident. Est pariatur consequat adipisicing ea commodo nulla aliqua adipisicing ea.Quis velit ut laborum tempor et esse incididunt velit nulla tempor proident.'
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};
const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 2.8rem;
  }
  .content-resume {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
