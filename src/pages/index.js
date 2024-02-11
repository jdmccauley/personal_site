import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {NeoBox} from '@site/src/components/neobox';
import {ContactMe} from '@site/src/components/contactme';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src='img/me.jpeg' className={styles.avatar}/>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}


function AboutMe() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <main className={styles.heroBanner}>
    <div className="container">
      <Heading as="h1">
        About Me
      </Heading>
      <p className="hero__subtitle">
        I'm a researcher at Lawrence Berkeley National Laboratory working on synthetic biology for biofuels and bioproducts. 
        In addition to the wet lab, I spend time in the dry lab writing tools and analysis pipelines to enable world-class 
        research. Outside of the lab, I enjoy spending time with my friends and family (two and four legs) and baking.
      </p>
    </div>
    </main>
  );
}


function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Joshua McCauley's personal site.">
      <HomepageHeader />
      <AboutMe />
      <ContactMe />
      <div className={styles.space}></div>
    </Layout>
  );
}

export default Home;
