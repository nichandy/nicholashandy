import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <div className="">
      <Header minimal={false} hide={false} />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element]).isRequired,
};
