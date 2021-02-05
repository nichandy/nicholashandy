import React from 'react';
import { css } from '@emotion/react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';
import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

const Home = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{projects.totalCount} Posts</h4>
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

Home.defaultProps = {
  data: [{}],
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "YYYY")
            tech
            links
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Home;
