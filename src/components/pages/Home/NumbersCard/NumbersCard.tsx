import { numbersCardData } from './data';
import styles from './styles.module.css';

export const NumbersCard = () => {
  return (
    <div className={styles.wrapper}>
      {numbersCardData.map((item) => (
        <div key={item.id} className={styles.item}>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.divider} />
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
