import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';
import Developer from './Developer';

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Developer minimal={false} />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
