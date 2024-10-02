import Link from 'next/link';
import styles from './styles.module.css';
import { Dispatch, SetStateAction } from 'react';

interface TProps {
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export const Hero = ({ setIsPlaying }: TProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Legacies <br />
          <span>Continued</span>
        </h1>
        <p className={styles.description}>
          We help business owners pass on their legacies to someone who isn&apos;t part of a Private Equity fund or
          Competitor.
        </p>
        <Link href="#play-icon" onClick={() => setIsPlaying(true)}>
          <button className={styles.mainBtn}>Watch our video</button>
        </Link>
      </div>

      <div className={styles.mission}>
        <div className={styles.content}>
          <h2 className={styles.missionTitle}>
            Our <span>Mission:</span>
          </h2>

          <p className={styles.missionDescription}>
            <span>
              We are an owner/operator group that buys and grows industrials businesses with the intent of never
              selling.
            </span>
            We work with owners to pass on their legacies to a new permanent home — Industrial Succession. We aim to
            operate the company onsite alongside existing employees. With us, there is no lengthy transition period, no
            moving the company location, no employee downsizing, and no integration into a larger entity.
          </p>
        </div>
      </div>
    </section>
  );
};
