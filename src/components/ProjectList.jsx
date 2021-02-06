import React from 'react';
import PropTypes from 'prop-types';
import ProjectListItem from './ProjectListItem';
import styles from './ProjectList.module.scss';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map(({ node }) => (
        <div className={styles.ProjectList} key={node.id}>
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
