import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};

wrapPageElement.propTypes = {
  element: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object,
};

export default wrapPageElement;
