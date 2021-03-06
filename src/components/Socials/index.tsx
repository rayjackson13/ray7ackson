import React from 'react';

import * as styles from './Socials.module.scss';
import socialInfo from './social.json';

type Props = {
  classes?: string;
};

export const Socials = ({ classes }: Props): JSX.Element => (
  <div className={classes}>
    <ul className={styles.social}>
      {socialInfo.streamingPlatforms.map((val, idx) => (
        <li key={idx}>
          <a
            className={styles.link}
            href={val.url}
            rel="nofollow noreferrer"
            target="_blank"
          >
            <i className={`fab fa-${val.icon}`}></i>
          </a>
        </li>
      ))}
      <li className={styles.divider} />
      {socialInfo.socialMedia.map((val, idx) => (
        <li key={idx}>
          <a
            className={styles.link}
            href={val.url}
            rel="nofollow noreferrer"
            target="_blank"
          >
            <i className={`fab fa-${val.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
