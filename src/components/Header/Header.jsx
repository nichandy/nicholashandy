import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';

const Header = ({ minimal, hide }) => {
  return (
    <section className="section is-large">
      <div className="container">
        <div className="has-text-centered">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you`&#39;`re currently
            reading.
          </h2>
          <SocialLinks minimal={minimal} hide={hide} />
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  minimal: PropTypes.bool,
  hide: PropTypes.bool,
};

Header.defaultProps = {
  minimal: false,
  hide: false,
};
export default Header;
