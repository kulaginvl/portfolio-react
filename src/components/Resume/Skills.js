import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../../styles/Layouts';
import TitleBlock from '../TitleBlock';
import Progres from './Progres';

const Skills = () => {
  return (
    <SkilsStyled>
      <MainLayout>
        <TitleBlock title="Resume" span="Resume" />
        <InnerLayout>
          <div className="skills">
            <Progres title={'HTML'} width={'70%'} text={'70%'} />
          </div>
        </InnerLayout>
      </MainLayout>
    </SkilsStyled>
  );
};

const SkilsStyled = styled.section``;

export default Skills;
