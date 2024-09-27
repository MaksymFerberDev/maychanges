'use client';

import React, { useEffect, useRef, useState } from 'react';
import { attributesData } from './data';
import styles from './styles.module.css';

export const Attributes = () => {
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
    <section className={styles.wrapper} id='attributes'>
      <div className={styles.business}>
        <h2 className={styles.title}><span>Business</span> Attributes</h2>
        <p className={styles.mainDescription}>
          We are searching for privately held companies with developed operational processes
          that need sales, organizational, and marketing improvement to grow. Businesses should
          have EBITDA of sub-$5m with stable cash flows. We are agnostic to all types of USA
          manufacturing and industrials businesses. We are passionate about businesses that:
        </p>
      </div>

      <div className={styles.content} ref={sectionRef}>
        {attributesData.map((item) => (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.itemTitle}>0{item.id}</h3>
            <p className={styles.itemDescription}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
};
