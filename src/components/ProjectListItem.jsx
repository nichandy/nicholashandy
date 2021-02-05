import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';

const ProjectListItem = ({ pageLink, title, date, description, techStack, projectLinks }) => {
  return (
    <Link
      to={pageLink}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {title}{' '}
        <span
          css={css`
            color: #555;
          `}
        >
          — {date}
        </span>
      </h3>
      <p>{description}</p>
      <p>{projectLinks}</p>
      {techStack.map((tech) => {
        return <span>{tech}, </span>;
      })}
    </Link>
  );
};

ProjectListItem.propTypes = {
  pageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectListItem;
