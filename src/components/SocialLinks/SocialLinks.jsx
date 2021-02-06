import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import styles from './SocialLinks.module.scss';
import useBasicInfo from '../../hooks/useBasicInfo';

const SocialLink = ({ network, url }) => (
  <a className={network} href={url}>
    <Icon name={network} />
    <span className={styles.title}>{network}</span>
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
    <div className={minimal ? styles.small : styles.networks}>
      {socials.map((profile) => (
        <SocialLink network={profile.network} url={profile.url} />
      ))}
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
