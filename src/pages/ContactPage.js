import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import TitleBlock from '../components/TitleBlock';

const ContactPage = () => {
  return (
    <MainLayout>
      <TitleBlock title={'Contact'} span={'Contact'} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <form className="form">
              <div className="form-field">
                <label htmlFor="name" id="name">
                  Enter your name
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email" id="email">
                  Enter your email
                </label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject" id="email">
                  Enter your subject
                </label>
                <input type="text" id="subject" />
              </div>
              <div className="text-area">
                <label htmlFor="">Enter your Message</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              </div>
            </form>
          </div>
          <div className="right-content"></div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .form {
      width: 100%;

      .form-field {
        margin-top: 1.9rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -18px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 2.5rem;
          padding: 0 0.94rem;
          width: 100%;
          color: inherit;
        }
      }
    }
  }
`;

export default ContactPage;
