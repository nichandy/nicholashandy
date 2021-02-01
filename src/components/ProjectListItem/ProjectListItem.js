import React from 'react';
import styles from './ProjectListItem.module.css';

const ProjectListItem = (props) => (
  <div className={styles.container}>
    <img src={props.image} className={styles.image} alt="" />
    <div className={styles.text}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <a href={props.link} className={styles.link}>
        {props.linkName}
      </a>
      <p className={styles.techStack}>{props.techStack}</p>
    </div>
  </div>
);

export default ProjectListItem;
