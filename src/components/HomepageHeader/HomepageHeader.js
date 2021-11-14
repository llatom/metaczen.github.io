import React from 'react';
import clsx from 'clsx';
import styles from './HomepageHeader.module.css';

export default function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    </header>
  );
}
