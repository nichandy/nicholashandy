import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 992,
        padding: `0 1rem`,
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
