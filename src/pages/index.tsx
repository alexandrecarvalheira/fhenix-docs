import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { FC } from 'react';

import styles from './index.module.css';
import AdditionalFeatures from "../components/AdditionalFeatures";


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
              <div className="row">
                  {/*<div className={styles.container2}>*/}
                  <div className="col col--6">
                      <div className="row">

                          <Heading as="h1" className="hero__title">
                              {siteConfig.title}
                          </Heading>
                      </div>
                      <div className="row">
                          <p className="hero__subtitle">{siteConfig.tagline}</p>
                          <p>
                              Fhenix is the first Fully Homomorphic Encryption (FHE) powered L2 to bring computation
                              over encrypted data to Ethereum.
                              Through the use of its FHE rollups, Fhenix enables Ethereum developers to seamlessly
                              deploy encrypted smart contracts to leverage end-to-end encryption of their data.
                          </p>
                      </div>
                      <div className={clsx("row", styles.ButtonRow)}>
                          <div className='col col--6'>
                              <Link
                                  className='button button--primary'
                                  to="/docs/devdocs/intro">
                                  Start Building
                              </Link>
                          </div>
                          <div className='col col--4'>
                              <Link
                                  className='button button--lol'
                                  to={"/docs/tutorial/intro"}>
                                  Tutorial
                              </Link>
                          </div>


                          {/*</div>*/}
                      </div>
                      <div className={clsx("row", styles.ButtonRowMobile)}>
                          <Link
                              className='button button--primary'
                              to="/docs/devdocs/intro">
                              Start Building
                          </Link>
                      </div>
                      <div className={clsx("row", styles.ButtonRowMobile)}>
                          <Link
                              className='button button--lol'
                              to={"/docs/tutorial/intro"}>
                              Tutorial
                          </Link>
                      </div>
                  </div>
                  <div className="hide-small-width col col--6" style={{marginTop: "-100px"}}>
                      <img alt="fhenix stuttershock image" src="img/hero-background-img.svg"/>
                  </div>
              </div>

          </div>
      </header>
  );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={`Hello from ${siteConfig.title}`}
                description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <AdditionalFeatures/>
            </main>
        </Layout>
    );
}
