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
                <img src={item.image} alt="img" />
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
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuBlockStyled>
  );
};

const MenuBlockStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  .grid-item {
    .potfolio-content {
      display: block;
      position: relative;
      h5 {
        font-size: 1.2rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: none;
      }
    }
  }
`;

export default MenuBlock;
