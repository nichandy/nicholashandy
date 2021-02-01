import React from 'react';
import IntroBlockStyles from './IntroBlock.module.css';

// Avatar/Logo
// Name
// Area of expertise
// Social Links
const IntroBlock = ({ children }) => (
  <div className={IntroBlockStyles.container}>{children}</div>
);

export default IntroBlock;
