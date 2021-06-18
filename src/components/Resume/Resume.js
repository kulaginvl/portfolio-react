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
        <SmallTitleStyled icon={briface} title={'Working Experince'} />
        <div className="content-resume">
          <ResumeItem />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section``;

export default Resume;
