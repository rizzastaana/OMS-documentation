import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'System Requirements',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Review the system requirements to ensure that you have the supported versions of prerequisite and co-requisite software and hardware.
      </>
    ),
  },
  {
    title: 'Release Notes',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Review important information about the latest and previous DX releases.
      </>
    ),
  },
  {
    title: 'Defects',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Browse and search how-to tips, quick fixes, and resolution for defects found in your supported DX version.
      </>
    ),
  },
  {
    title: 'Security Bulletins',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Browse and search for security bulletins on vulnerabilities found in your supported DX version.
      </>
    ),
  },
  {
    title: 'Whitepapers',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Browse and search for whitepapers relevant to your supported DX version.
      </>
    ),
  },
  {
    title: 'Webinars',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Browse and search for webinars or open mics relevant to your supported DX version.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
