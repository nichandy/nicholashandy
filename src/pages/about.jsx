import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We`&#39;`re the only site running on your computer dedicated to showing the best photos and videos of pandas
        eating lots of food.
      </p>
    </Layout>
  );
}

About.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

About.defaultProps = {
  data: [{}],
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
