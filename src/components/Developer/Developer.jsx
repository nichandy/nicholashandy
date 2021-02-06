import React from 'react';
import PropTypes from 'prop-types';
import useBasicInfo from '../../hooks/useBasicInfo';

const Developer = ({ minimal }) => {
  const { name, field, logo, website, introduction, socials } = useBasicInfo();
  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1>{name}</h1>
      <p>{field}</p>
      <p>{introduction}</p>
      <a href={website}>Website</a>
      {socials.map((profile) => {
        return (
          <a href={profile.url} key={profile.network}>
            {profile.network}
          </a>
        );
      })}
    </div>
  );
};

Developer.propTypes = {
  minimal: PropTypes.bool,
};

Developer.defaultProps = {
  minimal: false,
};
export default Developer;
