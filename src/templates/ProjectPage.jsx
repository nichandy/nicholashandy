import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ProjectPage = ({ data }) => {
  const project = data.markdownRemark;
  const { title } = project.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={project.excerpt} />
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
    </Layout>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
};

ProjectPage.defaultProps = {
  data: [{}],
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`;

export default ProjectPage;
