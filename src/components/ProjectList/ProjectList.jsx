import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ProjectListItem from '../ProjectListItem';

const ProjectList = ({ projects }) => {
  const [id] = React.useState(nanoid);
  return (
    <div className="container">
      {projects.map(({ node }) => (
        <div className="columns is-centered" key={id}>
          <ProjectListItem
            pageLink={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            techStack={node.frontmatter.tech}
            projectLinks={node.frontmatter.links}
          />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

ProjectList.defaultProps = {
  projects: [{}],
};

export default ProjectList;
