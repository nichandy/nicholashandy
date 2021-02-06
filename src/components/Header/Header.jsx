import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';

const Header = ({ minimal, hide }) => {
  return (
    <header>
      <SocialLinks minimal={minimal} hide={hide} />
    </header>
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
