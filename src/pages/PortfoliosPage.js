import React from 'react';
import TitleBlock from '../components/TitleBlock';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import portfolios from '../data/portfolios';
import MenuBlock from '../components/Portfolios/MenuBlock';
import NewButton from '../components/NewButton';

const allButtons = ['All', 'Animation', ...portfolios.map((item) => item.category)];

const PortfoliosPage = () => {
  const [menuItem, setMenuItem] = React.useState(portfolios);
  const [button, setButton] = React.useState(allButtons);

  const filter = (button) => {
    const filterData = portfolios.filter((item) => item.category === button);
    setMenuItem(filterData);
  };
  return (
    <div>
      <MainLayout>
        <TitleBlock title={'Portfolio'} span={'Portfolio'} />
        <InnerLayout>
          <NewButton filter={filter} button={button} />
          <MenuBlock menuItem={menuItem} />
        </InnerLayout>
      </MainLayout>
    </div>
  );
};

export default PortfoliosPage;
