import React from 'react';
import styles from './ProjectList.module.css';
import ProjectItem from '../ProjectListItem';

const ProjectList = (props) => {
  return (
    <div className={styles.container}>
      {props.projects.map((project) => {
        return (
          <ProjectItem
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
            linkName={project.linkName}
            techStack={project.techStack}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
