import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import TelegramIcon from '@material-ui/icons/Telegram';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particles />
      </div>
      <div className="typography">
        <h1>
          Hi I'm
          <span>Vlad</span>
        </h1>
        <p>
          Reprehenderit ea amet aliquip ullamco incididunt est ad duis. Amet esse fugiat ad
          pariatur.Deserunt anim nisi cupidatat velit enim fugiat et labore elit nisi eiusmod.
        </p>
        <div className="icons">
          <a href="#" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="#" className="icon i-telegram">
            <TelegramIcon />
          </a>
          <a href="#" className="icon i-youtube">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-particles-js {
    position: absolute;
    left: 0;
    top: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5 rem;
        }
      }
    }
  }
`;

export default HomePage;
