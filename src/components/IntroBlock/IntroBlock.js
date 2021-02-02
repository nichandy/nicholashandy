import React from 'react';
import styles from './IntroBlock.module.css';

// Avatar/Logo
// Name
// Area of expertise
// Social Links
const IntroBlock = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default IntroBlock;
