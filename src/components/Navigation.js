import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../assets/img/avatar.jpg';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/home" activeClassName="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class">
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacts" activeClassName="active-class">
            Contacts
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 My Portf Site</p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.2rem 0;
        position: relative;
        z-index: 4;

        &:hover {
          cursor: pointer;
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.5s cubic-bezier(1, -0.19, 0.25, 0.96);
          z-index: 3;
          opacity: 0.21;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      text-align: center;
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
    }
  }
`;
