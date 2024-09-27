'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { whyData } from './data';
import styles from './styles.module.css';
import clsx from 'clsx';

export const Why = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            entry.target.classList.add(styles.animate);
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.8 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [isAnimated]);

  return (
    <section className={clsx(styles.wrapper, isAnimated && styles.animate)} id='why' ref={sectionRef}>
      <div className={styles.title}>
        <span>Why</span> Industrials & Manufacturing?
      </div>
      {whyData.map((item) => (
        <div key={item.id} className={`${styles.item} ${styles[`animation_${item.id}`]}`}>
          <div className={styles.image}>
            <Image src={item.icon} alt={item.title} width={24} height={24} />
          </div>
          <div className={styles.itemContent}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
};
