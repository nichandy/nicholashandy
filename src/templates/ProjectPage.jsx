import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ProjectPage = ({ data }) => {
  const project = data.markdownRemark;
  const { title, date, tech, links } = project.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={project.excerpt} />
      <div>
        <h1>{title}</h1>
        <h6>{date}</h6>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
        <div>
          {links.length === 0 ? (
            ''
          ) : (
            <div>
              <h3>Links</h3>
              <ul>
                {links.map((url) => {
                  return <li key={url}>{url}</li>;
                })}
              </ul>
            </div>
          )}
          {tech.length === 0 ? (
            ''
          ) : (
            <div>
              <h3>Tech Stack</h3>
              <ul>
                {tech.map((tool) => {
                  return <li key={tool}>{tool}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
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
        date
        links
        tech
      }
      excerpt
    }
  }
`;

export default ProjectPage;
