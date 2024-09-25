import Image from 'next/image';
import { whyData } from './data';
import styles from './styles.module.css';

export const Why = () => {

  return (
    <section className={styles.wrapper} id='why'>
      <div className={styles.title}>
        <span>Why</span> Industrials & Manufacturing?
      </div>
      {whyData.map((item) => (
        <div key={item.id} className={styles.item}>
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
