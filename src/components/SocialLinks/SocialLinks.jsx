import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './SocialLinks.module.scss';
import useBasicInfo from '../../hooks/useBasicInfo';
import Icon from '../Icon';

const SocialLink = ({ network, url }) => (
  <a className={network} href={url}>
    <Icon name={network} />
    <div className="">{network}</div>
  </a>
);

SocialLink.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const SocialLinks = ({ minimal, hide }) => {
  const { socials } = useBasicInfo();
  if (hide) return null;
  return (
    <div className="columns is-centered">
      {socials.map((profile) => {
        const [id] = React.useState(nanoid);
        return (
          <div className="column is-1">
            <SocialLink network={profile.network} url={profile.url} key={id} />
          </div>
        );
      })}
    </div>
  );
};

SocialLinks.propTypes = {
  minimal: PropTypes.bool,
  hide: PropTypes.bool,
};

SocialLinks.defaultProps = {
  minimal: PropTypes.bool,
  hide: PropTypes.bool,
};

export default SocialLinks;
