import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import IconButton from '../IconButton';

const ProjectListItem = ({ pageLink, title, date, description, techStack, website, code }) => {
  console.log(website);
  const projectLinks = [
    {
      icon: 'Compass',
      name: website.website[0],
      url: website[1],
    },
    {
      icon: 'Github',
      name: code[0],
      url: code[1],
    },
  ];
  const [id] = React.useState(nanoid);
  return (
    <div className="column is-four-fifths">
      <div className="box">
        <Link to={pageLink} className="">
          <h3 className="is-size-3">
            {title} <span className="">— {date}</span>
          </h3>
          <p className="">{description}</p>
          {projectLinks.map((project) => {
            return <IconButton key={id} url={project.url} icon={project.icon} name={project.name} />;
          })}
          <p className="">{projectLinks}</p>
          {techStack.map((tech) => {
            return <span key={id}>{tech}, </span>;
          })}
        </Link>
      </div>
    </div>
  );
};

ProjectListItem.propTypes = {
  pageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  website: PropTypes.arrayOf(PropTypes.string).isRequired,
  code: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectListItem;
