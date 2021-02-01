import * as React from 'react';
import Layout from '../components/Layout';
import IntroBlock from '../components/IntroBlock';
import ProjectList from '../components/ProjectList';

const projectData = [
  {
    title: 'Project 1',
    image: 'https://i.imgur.com/du5VGEb.jpeg',
    description:
      "I'm Slim Shady, yes, I'm the real Shady. All you other Slim Shadys are just imitating. So won't the real Slim Shady please stand up. Please stand up, please stand up?. 'Cause I'm Slim Shady, yes, I'm the real Shady. All you other Slim Shadys are just imitating. So won't the real Slim Shady please stand up. Please stand up, please stand up?",
    link: 'https://github.com/nichandy/web-app-sandbox',
    linkName: 'Project Repo',
    techStack: ['Mac & Cheese', 'Applesauce', 'Greens'],
  },

  {
    title: 'Project 2',
    image: 'https://i.imgur.com/qOvSo8W.jpeg',
    description: 'This is my description',
    link: 'https://github.com/nichandy/web-app-sandbox',
    linkName: 'Project Repo',
    techStack: ['Mac & Cheese', 'Applesauce', 'Greens'],
  },
];

// markup
const IndexPage = () => {
  return (
    <Layout>
      <IntroBlock>
        <h1>Nicholas Handy</h1>
        <p>
          Hi! I am a Computer Engineer who specializes in both Embedded and Full
          Stack Development
        </p>
      </IntroBlock>
      <ProjectList projects={projectData} />
    </Layout>
  );
};

export default IndexPage;
