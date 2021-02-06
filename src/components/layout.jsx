import React from 'react';
import PropTypes from 'prop-types';
import Developer from './Developer';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Developer minimal={false} />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
