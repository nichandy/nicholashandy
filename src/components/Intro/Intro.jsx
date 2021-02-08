import React from 'react';
import PropTypes from 'prop-types';
import useBasicInfo from '../../hooks/useBasicInfo';

// TODO Add support for styling react-icons with bulma
// TODO Sizing, Color, ClassName
// TODO Fix sizing of icons
// TODO Fix spacing between icons
// TODO Make icons clickable
// TODO Add subtext for each icon that is hidden until hover

const Intro = ({ minimal, hide }) => {
  const { name, field, logo, introduction } = useBasicInfo();
  return (
    <div className="mb-4">
      <figure className="image is-128x128 is-inline-block">
        <img className="is-rounded" src={logo} alt="Logo" />
      </figure>
      <p className="title">{name}</p>
      <div className="subtitle">
        <p className="">{field}</p>
        {/* <p className="">{introduction}</p> */}
      </div>
    </div>
  );
};

Intro.propTypes = {
  minimal: PropTypes.bool,
  hide: PropTypes.bool,
};

Intro.defaultProps = {
  minimal: false,
  hide: false,
};

export default Intro;
