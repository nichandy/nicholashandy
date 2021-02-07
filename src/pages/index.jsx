import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

const Home = ({ data }) => {
  const contentData = data.allMarkdownRemark;
  const { edges: projects } = contentData;
  return (
    <div className="index">
      <section className="section">
        <div className="container">
          <div className="">
            <h4>{contentData.totalCount} Posts</h4>
            <ProjectList projects={projects} />
          </div>
        </div>
      </section>
    </div>
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
