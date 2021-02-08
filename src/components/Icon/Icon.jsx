import React, { memo } from 'react';
import PropTypes from 'prop-types';

// memo is used to optimize performance by not rerendering components that aren't changing

import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiSun,
  FiMoon,
  FiImage,
  FiInfo,
  FiMail,
  FiCompass,
  FiArrowDownCircle,
} from 'react-icons/fi';

import { IconContext } from 'react-icons';

const Icon = memo(({ name, style }) => {
  const components = {
    Email: FiMail,
    Link: FiCompass,
    Download: FiArrowDownCircle,
    'Info & Download': FiArrowDownCircle,
    ArrowDownCircle: FiArrowDownCircle,
    Linkedin: FiLinkedin,
    GitHub: FiGithub,
    Twitter: FiTwitter,
    Sun: FiSun,
    Moon: FiMoon,
    Compass: FiCompass,
    Image: FiImage,
    Mail: FiMail,
    Info: FiInfo,
  };

  const IconMapped = components[name];

  if (!IconMapped) return null;

  return (
    <IconContext.Provider value={style}>
      <div>
        <IconMapped />
      </div>
    </IconContext.Provider>
  );
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({
    size: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }).isRequired,
};

export default Icon;
