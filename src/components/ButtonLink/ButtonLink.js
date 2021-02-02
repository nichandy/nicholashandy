import React from 'react';
import { Link } from 'gatsby';
import styles from './ButtonLink.module.css';

const ButtonLink = (props) => (
  <Link {...props} styles={styles.button}>
    {props.children}
  </Link>
);

export default ButtonLink;
