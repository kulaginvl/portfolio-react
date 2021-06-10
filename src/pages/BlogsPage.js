import React from 'react';
import styled from 'styled-components';
import TitleBlock from '../components/TitleBlock';
import blogs from '../data/blogs';
import { InnerLayout, MainLayout } from '../styles/Layouts';

const BlogsPage = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <TitleBlock title={'Blogs'} span={'Blogs'} />
        <InnerLayout className="blog">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={'blog-item'}>
                <div className="image">
                  <img src={blog.image} alt="blog" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
};

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    .blog-item {
      padding: 1rem 1rem;
      background-color: var(--background-dark-color-2);
    }
    .image {
      width: 100%;
      padding-bottom: 0.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: rotate(5deg) scale(1.1);
        }
      }
    }
    .title {
      a {
        font-size: 1.5rem;
        color: var(--white-color);
        padding: 2rem 0;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
