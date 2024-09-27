'use client';

import { Dispatch, RefObject, SetStateAction } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { useClickOutside } from '@/components/hooks/useClickOutside';
import { TTeamData } from '@/components/pages/Home/Team/interfaces';
import Link from 'next/link';

interface TProps {
  modalItem: TTeamData;
  setModalItem: Dispatch<SetStateAction<TTeamData | null>>;
}

export const Modal = ({ modalItem, setModalItem }: TProps) => {
  const modalRef = useClickOutside(() => setModalItem(null)) as RefObject<HTMLDivElement>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content} ref={modalRef}>
        <div className={styles.header}>
          <button className={styles.close} onClick={() => setModalItem(null)}>
            <Image src="/assets/icons/close.svg" alt="close" width={20} height={20} />
          </button>
          <Image
            src={modalItem.image}
            width={154}
            height={154}
            alt={modalItem.name}
            className={styles.image}
          />
          <div className={styles.headerTitle}>
            <h3 className={styles.name}>{modalItem.name}</h3>
            <p className={styles.position}>{modalItem.position}</p>
          </div>

          <Link href={modalItem.linkedin} className={styles.linkedin} target="_blank" rel="noreferrer">
            <Image src="/assets/icons/linkedin.svg" alt="linkedin" width={20} height={20} />
          </Link>
        </div>

        <div className={styles.main}>
          <p className={styles.short_desc}>{modalItem.modal.short_description}</p>
          {modalItem.modal.description.map((item, index) => (
            <p key={index} className={styles.desc}>{item}</p>
          ))}
          {(modalItem.modal.list ? (
            <ul className={styles.list}>
              <li className={styles.listTitle}>{modalItem.modal.list.title}</li>
              {modalItem.modal.list.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null)}
        </div>
      </div>
    </div>
  )
};
