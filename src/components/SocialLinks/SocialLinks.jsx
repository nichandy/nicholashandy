import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import useBasicInfo from '../../hooks/useBasicInfo';
import Icon from '../Icon';

const SocialLink = ({ network, url, style }) => (
  <span className="icon is-inline-block">
    <Icon name={network} style={style} />
  </span>
);

SocialLink.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
    attr: PropTypes.string,
    title: PropTypes.string,
  }),
};

SocialLink.defaultProps = {
  style: {
    color: undefined,
    size: '1em',
    className: undefined,
    style: undefined,
    attr: undefined,
    title: undefined,
  },
};

const SocialLinks = ({ minimal, hide }) => {
  const { socials } = useBasicInfo();
  if (hide) return null;
  return (
    <div className="columns is-centered">
      <div className="column is-one-quarter">
        {socials.map((profile) => {
          const [id] = React.useState(nanoid);
          return <SocialLink network={profile.network} url={profile.url} key={id} />;
        })}
      </div>
    </div>
  );
};

SocialLinks.propTypes = {
  minimal: PropTypes.bool,
  hide: PropTypes.bool,
};

SocialLinks.defaultProps = {
  minimal: false,
  hide: false,
};

export default SocialLinks;
