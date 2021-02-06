import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './ProjectListItem.module.scss';

const ProjectListItem = ({ pageLink, title, date, description, techStack, projectLinks }) => {
  return (
    <Link to={pageLink} className={styles.ProjectListItem}>
      <h3 className={styles.ProjectListItem_h3}>
        {title} <span className={styles.ProjectListItem_h3_span}>— {date}</span>
      </h3>
      <p>{description}</p>
      <p>{projectLinks}</p>
      {techStack.map((tech) => {
        return <span key={tech}>{tech}, </span>;
      })}
    </Link>
  );
};

ProjectListItem.propTypes = {
  pageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectListItem;
