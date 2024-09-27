'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';

interface TProps {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export const Video = ({ isPlaying, setIsPlaying }: TProps) => {

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className={styles.wrapper} id="play-icon">
      <iframe
        className={styles.video}
        src={`https://player.vimeo.com/video/487010306${isPlaying ? '?autoplay=1' : ''}`}
        title="Demo video"
        width="100%"
        height="auto"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {!isPlaying && (
        <div className={styles.play} onClick={handlePlayClick}>
          &nbsp;
        </div>
      )}
    </section>
  );
};