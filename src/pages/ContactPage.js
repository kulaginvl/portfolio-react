import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import TitleBlock from '../components/TitleBlock';
import Button from '../components/Button';
import ContactItem from '../components/Contact/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ContactPage = () => {
  const phoneico = <PhoneIcon />;
  const mailico = <MailOutlineIcon />;
  const locationico = <LocationOnIcon />;
  return (
    <MainLayout>
      <TitleBlock title={'Contact'} span={'Contact'} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Contact Title</h4>
            </div>
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
              <div className="form-field">
                <label htmlFor="">Enter your Message</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              </div>
              <div className="form-field">
                <Button title={'Send Email'} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              icon={phoneico}
              title={'Phone'}
              contact1={'+1123456789'}
              contact2={'2-123-456-78-91'}
            />
            <ContactItem
              icon={mailico}
              title={'Mail'}
              contact1={'+1123456789@mail.ru'}
              contact2={'2-123-456-78-91@mail.ru'}
            />
            <ContactItem
              icon={locationico}
              title={'Location'}
              contact1={'1 Pushkin Streat, Volgograd, Russia'}
              contact2={'Russia'}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
      display: flex;
      flex-direction: column;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.7rem;
      }
    }
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
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
