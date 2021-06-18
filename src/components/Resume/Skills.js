import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../../styles/Layouts';
import TitleBlock from '../TitleBlock';
import Progres from './Progres';

const Skills = () => {
  return (
    <SkilsStyled>
      <TitleBlock title="Skills" span="Skills" />
      <InnerLayout>
        <div className="skills">
          <Progres title={'HTML'} width={'70%'} text={'70%'} />
          <Progres title={'CSS'} width={'80%'} text={'80%'} />
          <Progres title={'JS'} width={'65%'} text={'65%'} />
          <Progres title={'REACT JS'} width={'85%'} text={'85%'} />
          <Progres title={'TS'} width={'35%'} text={'35%'} />
        </div>
      </InnerLayout>
    </SkilsStyled>
  );
};

const SkilsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`;

export default Skills;
