import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Pinterest from '@material-ui/icons/Pinterest';

const MenuBlock = ({ menuItem }) => {
  return (
    <MenuBlockStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="potfolio-content">
              <div className="portfolio-img">
                <img src={item.img} alt="img" />
              </div>
              <ul>
                <li>
                  <a href={item.link1}>
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a href={item.link2}>
                    <Pinterest />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </MenuBlockStyled>
  );
};

const MenuBlockStyled = styled.div``;

export default MenuBlock;
