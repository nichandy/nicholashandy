import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const IconButton = ({ icon, name, url }) => {
  return (
    <a href={url}>
      <div className="button">
        <Icon name={icon} />
        <span className="">{name}</span>
      </div>
    </a>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default IconButton;
