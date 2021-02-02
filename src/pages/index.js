import * as React from 'react';
import Layout from '../components/Layout';
import IntroBlock from '../components/IntroBlock';
import ProjectList from '../components/ProjectList';
import ButtonLink from '../components/ButtonLink';
import { projectData } from '../fixtures/projectData';
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
      <ButtonLink to="/">
        <h1>Home</h1>
      </ButtonLink>
    </Layout>
  );
};

export default IndexPage;
