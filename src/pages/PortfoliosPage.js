import React from 'react';
import TitleBlock from '../components/TitleBlock';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import portfolios from '../data/portfolios';
import MenuBlock from '../components/Portfolios/MenuBlock';

const PortfoliosPage = () => {
  const [menuItem, setMenuItem] = React.useState(portfolios);
  return (
    <div>
      <MainLayout>
        <TitleBlock title={'Portfolio'} span={'Portfolio'} />
        <InnerLayout>
          <MenuBlock menuItem={menuItem} />
        </InnerLayout>
      </MainLayout>
    </div>
  );
};

export default PortfoliosPage;
