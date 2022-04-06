import clsx from 'clsx';
import React, { UIEventHandler, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import * as styles from './Hero.module.scss';

import BackgroundImage from 'assets/img/hero-spring.jpg';
import RayPhoto from 'assets/img/me.jpeg';
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
        <div className={styles.about}>
          <img
            alt="Ray 7ackson | Kostya"
            className={styles.aboutImg}
            src={RayPhoto}
          />
          <div className={styles.aboutWrap}>
            <h1 className={clsx(styles.board, styles.aboutCaption)}>
              A vocalist in your bedroom.&nbsp;&nbsp;🔥 🦆 🤙🏽
            </h1>
            <PerfectScrollbar className={clsx(styles.aboutText, styles.board)}>
              <p>
                Ray 7ackson is&nbsp;a&nbsp;singer/producer from South Siberia
                who takes his music as&nbsp;art and tries to&nbsp;bring
                it&nbsp;to&nbsp;the next level with each song he&nbsp;releases.
              </p>
              <p>
                In&nbsp;2015, Ray started his SoundCloud account where
                he&nbsp;was posting acoustic covers to&nbsp;his favourite songs
                and his own ideas recorded with his guitar. It&nbsp;is&nbsp;then
                that he&nbsp;started learning music production.
              </p>
              <p>
                Five years later, in&nbsp;2020, he&nbsp;started exploring and
                conquering electronic-based genres. That&rsquo;s when
                he&nbsp;also started publishing his music officially.
              </p>
              <p>
                Currently Ray&rsquo;s not set on&nbsp;any specific genre but
                he&nbsp;says that he&nbsp;doesn&rsquo;t have
                to&nbsp;be&nbsp;&mdash; he&nbsp;wants to&nbsp;make great music
                and it&nbsp;doesn&rsquo;t really matter if&nbsp;it&rsquo;s
                a&nbsp;Pop or&nbsp;EDM, as&nbsp;long as&nbsp;it&nbsp;helps him
                share his message with his&nbsp;listeners.
              </p>
            </PerfectScrollbar>
          </div>
        </div>

        <span className={styles.attribution}>
          Photo by
          <a
            href="https://unsplash.com/photos/YQwVE8cpi4g"
            rel="noreferrer"
            target="_blank"
          >
            Lennart Hellwig
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
