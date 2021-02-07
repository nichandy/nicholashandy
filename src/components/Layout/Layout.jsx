import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header minimal={false} hide={false} />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element]).isRequired,
};
