import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import useBasicInfo from '../../hooks/useBasicInfo';
import Icon from '../Icon';

const SocialLink = ({ network, url, style }) => (
  <a className="social-link column is-2 is-inline-block" href={url}>
    <span className="icon is-inline-block is-medium mx-5">
      <Icon name={network} style={style} />
    </span>
    <div className="social-link-text has-text-centered">{network}</div>
  </a>
);

SocialLink.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.shape({
    size: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }).isRequired,
};

const IconStyle = {
  icon: {
    size: '1em',
    className: 'fi-icon fi-sm',
  },
  icon_18: {
    size: '18px',
    className: 'fi-icon fi-md',
  },
  icon_24: {
    size: '24px',
    className: 'fi-icon fi-lg',
  },
  icon_36: {
    size: '36px',
    className: 'fi-icon fi-xl',
  },
  icon_48: {
    size: '1em',
    className: 'fi-icon fi-xxl',
  },
};

const SocialLinks = ({ minimal, hide }) => {
  const { socials } = useBasicInfo();
  if (hide) return null;
  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-half has-text-centered">
        {socials.map((profile) => {
          const [id] = React.useState(nanoid);
          return (
            <SocialLink
              network={profile.network}
              url={profile.url}
              key={id}
              style={minimal ? IconStyle.icon : IconStyle.icon_24}
            />
          );
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
