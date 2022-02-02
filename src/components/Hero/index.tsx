import React, { useRef } from 'react';

import * as styles from './Hero.module.scss';

import BackgroundImage from 'assets/img/bg-new.jpeg';
import { Snow } from 'components/Snow';
import { Socials } from 'components/Socials';

export const Hero = (): JSX.Element => {
  const ref = useRef<HTMLElement>(null);
  const gradient =
    'linear-gradient(90deg, rgba(55,55,55,.25) 0%, rgba(55,55,55,0) 100%)';
  const backgroundImage = `${gradient}, url(${BackgroundImage})`;
  return (
    <header className={styles.root} ref={ref}>
      <div className={styles.bg} style={{ backgroundImage }}>
        <Snow parentRef={ref} />
      </div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a className={styles.brand} href="#">
            <span className={styles.accent}>Ray</span> 7ackson
          </a>

          <Socials />
        </div>
      </nav>
      <div className={styles.content}>
        <span className={styles.attribution}>
          Photo by
          <a
            href="https://unsplash.com/photos/_TuI8tZHlk4"
            rel="noreferrer"
            target="_blank"
          >
            Josh Hild
          </a>
          on
          <a href="https://unsplash.com" rel="noreferrer" target="_blank">
            Unsplash
          </a>
        </span>
      </div>
    </header>
  );
};
