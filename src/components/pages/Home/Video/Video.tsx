'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.wrapper}>
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
        <div id="play-icon" className={styles.play} onClick={handlePlayClick}>
          &nbsp;
        </div>
      )}
    </div>
  );
};