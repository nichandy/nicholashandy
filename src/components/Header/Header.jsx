import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';
import Intro from '../Intro';

const Header = ({ minimal, hide }) => {
  return (
    <section className="section is-medium">
      <div className="container has-text-centered">
        <Intro minimal={minimal} hide={hide} />
        <SocialLinks minimal={minimal} hide={hide} />
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
