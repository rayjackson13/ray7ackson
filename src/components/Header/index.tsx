import React from 'react';

import * as styles from './Header.module.scss';

import { Socials } from 'components/Socials';

export const Header = (): JSX.Element => (
  <aside className={styles.header}>
    <div className={styles.navbar}>
      <div className={styles.container}>
        <a className={styles.brand} href="/">
          <span className={styles.accent}>Ray</span> 7ackson
        </a>

        <Socials classes={styles.socials} />
      </div>
    </div>
  </aside>
);
