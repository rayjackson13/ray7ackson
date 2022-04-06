import React from 'react';

import * as styles from './Footer.module.scss';

import { Socials } from 'components/Socials';

export const Footer = (): JSX.Element => (
  <aside className={styles.footer}>
    <div className={styles.navbar}>
      <div className={styles.container}>
        <a className={styles.brand} href="/">
          <span className={styles.accent}>Ray</span> 7ackson
        </a>

        <Socials classes={styles.socials} />

        <p className={styles.copy}>
          © Ray 7ackson 2015—{new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  </aside>
);
