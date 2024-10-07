'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { Links } from '../Header/data';
import Link from 'next/link';
import { Contact } from './data';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Footer = () => {
  const date = new Date();
  const pathname = usePathname();

  const scrollHandler = (item: string) => {
    if (pathname === "/") {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${item.toLowerCase()}`;
    }
  };

  return (
    <footer className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.right}>
            <Image
              src="/assets/pictures/industrial_logo_footer.jpg"
              alt="logo"
              width={236}
              height={71}
            />
          </div>
          <div className={styles.left}>
            <div className={styles.contactLink}>
              <h5 className={styles.title}>Contact info:</h5>
              {Contact.map((contact) => (
                <React.Fragment key={contact.id}>
                  {contact.url ? (
                    <Link
                      href={contact.url}
                      className={styles.item}
                    >
                      <Image
                        src={contact.icon}
                        alt={contact.name}
                        width={24}
                        height={24}
                      />
                      <p>{contact.name}</p>
                    </Link>
                  ) : (
                    <div
                      className={styles.item}
                    >
                      <Image
                        src={contact.icon}
                        alt={contact.name}
                        width={24}
                        height={24}
                      />
                      <p>{contact.name}</p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className={styles.navigator}>
              {Links.map((link) => (
                <React.Fragment key={link.id}>
                  {link.url ? (
                    <Link
                      href={link.url}
                      className={styles.item}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div
                      className={styles.item}
                      onClick={() => scrollHandler(link.scroll)}
                    >
                      <p>{link.scroll}</p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rights}>
          <div className={styles.divider} />

          <p>© {date.getFullYear()} Industrial Succession, all rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
