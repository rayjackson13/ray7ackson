import React, { useRef, useEffect } from 'react';

import * as styles from './Snow.module.scss';

import { SnowAnimation } from 'utils/SnowAnimation';
import { isWinter } from 'utils/isWinter';

type Props = {
  count?: number;
  parentRef: React.RefObject<HTMLElement>;
  refreshRate?: number;
  size?: number;
  speed?: number;
};

export const Snow = (props: Props): JSX.Element => {
  const ref = useRef<HTMLCanvasElement>(null);
  const {
    count = 500,
    parentRef,
    refreshRate = 60,
    size = 2,
    speed = 10,
  } = props;

  useEffect(() => {
    if (!isWinter() || !parentRef.current || !ref.current) return;

    const width = parentRef.current?.clientWidth || 0;
    const height = parentRef.current?.clientHeight || 0;
    new SnowAnimation(
      width,
      height,
      count,
      size,
      ref.current,
      speed,
      refreshRate
    );
  }, [count, parentRef, size, speed, refreshRate]);

  return <canvas className={styles.canvas} id="snow" ref={ref}></canvas>;
};
