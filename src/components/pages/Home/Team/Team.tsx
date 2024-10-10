'use client';

import Image from 'next/image';
import { teamData } from './data';
import styles from './styles.module.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Modal } from '@/components/UI';
import React from 'react';
import { TTeamData } from './interfaces';

export const Team = () => {
  const [modalItem, setModalItem] = useState<TTeamData | null>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const yOffset = window.pageYOffset;
    if (modalItem) {
      document.body.style.top = `-${yOffset}px`;
      document.body.classList.add('body-scroll-lock');
    } else if (!modalItem && document.body.style.top) {
      window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
      document.body.classList.remove('body-scroll-lock');
    }

    return () => {
      document.body.classList.remove('body-scroll-lock');
    };
  }, [modalItem]);

  const handleOpenModal = (item: TTeamData) => {
    setModalItem(item);
  };

  return (
    <>
      <section className={styles.wrapper} id="team">
        <h1 className={styles.title}>Team</h1>

        <div className={styles.content}>
          {teamData.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.image}>
                <Image src={item.image} alt={item.name} width={100} height={100} />
              </div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.name}</h3>
                <p className={styles.itemPosition}>{item.position}</p>
                <div className={styles.itemButtons}>
                  <button className={styles.btnLink} onClick={() => handleOpenModal(item)}>
                    Read more
                    <Image src="/assets/icons/shevron.svg" alt="arrow-right" width={7} height={10} />
                  </button>
                  <Link href={item.linkedin} className={styles.linkedin} target="_blank" rel="noreferrer">
                    <Image src="/assets/icons/linkedin.svg" alt="linkedin" width={20} height={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalItem && <Modal modalItem={modalItem} toggleRef={toggleRef} setModalItem={setModalItem} />}
    </>
  );
};
