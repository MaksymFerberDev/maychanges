'use client';

import Link from 'next/link';
import Image from 'next/image';
import { mediaData } from './data';
import styles from './styles.module.css';
import { Tweet } from 'react-tweet';

export const MediaPage = () => {
  return (
    <main className={styles.wrapper}>
      {mediaData.map((item, index) => (
        <article className={styles.item} key={item.date + index}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <div className={styles.text}>
              <p>{item.text}</p>
              {item.readMore && (
                <Link href={item.readMore} className={styles.readMore}>
                  Read more
                  <Image
                    src="/assets/icons/shevron.svg"
                    alt="Arrow"
                    width={9}
                    height={14}
                  />
                </Link>
              )}
            </div>

            <p className={styles.date}>{item.date}</p>
          </div>

          <div className={styles.image}>
              {item.media ? (
                <div className={styles.media}>
                  <Image
                    src={item.media}
                    alt={item.title}
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                </div>
              ) : item.tweet ? (
                <div className={styles.tweet}>
                  <Tweet id='1785048269493510273' />
                </div>
              ) : item.podcast ? (
                <div className={styles.podcast}>
                  <iframe height={item.podcast.height} width="100%" scrolling="no" src={item.podcast.url}></iframe>
                </div>
              ) : null}
          </div>
        </article>
      ))}
    </main>
  );
};
