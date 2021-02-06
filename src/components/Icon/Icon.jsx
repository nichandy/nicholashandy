import React, { memo } from 'react';
import PropTypes from 'prop-types';

// memo is used to optimize performance by not rerendering components that aren't changing

import { GitHub, Twitter, Linkedin, Sun, Moon, Image, Info, Mail, Compass, ArrowDownCircle } from 'react-feather';
import styles from './Icon.module.scss';

const Icon = memo(({ name }) => {
  const components = {
    Email: Mail,
    Link: Compass,
    Download: ArrowDownCircle,
    'Info & Download': ArrowDownCircle,
    ArrowDownCircle,
    Linkedin,
    GitHub,
    Twitter,
    Sun,
    Moon,
    Compass,
    Image,
    Mail,
    Info,
  };

  const IconMapped = components[name];
  // const IconComp = Feather[name]
  if (!IconMapped) return null;

  return <IconMapped className={styles.icon} />;
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
