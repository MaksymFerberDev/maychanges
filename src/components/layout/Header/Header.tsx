'use client';

import { useState, useRef, useEffect } from 'react';
import { MobileNavigator } from './components';
import styles from './styles.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Links } from './data';
import React from 'react';

export const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preventScroll = () => {
      document.ontouchmove = (e) => e.preventDefault();
      document.body.style.overflow = 'hidden';
    };
  
    const allowScroll = () => {
      document.ontouchmove = () => true;
      document.body.style.overflow = 'auto';
    };
  
    const timeout = setTimeout(() => {
      if (isMobileNavOpen) {
        preventScroll();
      } else {
        allowScroll();
      }
    }, 100);
  
    return () => clearTimeout(timeout);
  }, [isMobileNavOpen]);

  const scrollHandler = (item: string) => {
    if (pathname === '/') {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${item.toLowerCase()}`;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.main}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Image src="/assets/pictures/industrial_logo.jpg" alt="logo" width={168} height={40} />
          </Link>

          <nav className={styles.navigator}>
            {Links.map((link) => (
              <React.Fragment key={link.id}>
                {link.url ? (
                  <Link href={link.url} className={clsx(styles.item, pathname === link.url && styles.active)}>
                    {link.name}
                  </Link>
                ) : (
                  <div
                    className={clsx(styles.item, pathname === link.url && styles.active)}
                    onClick={() => scrollHandler(link.scroll)}
                  >
                    {link.scroll}
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div
            className={clsx(styles.mobileNav, isMobileNavOpen && styles.open)}
            ref={toggleRef}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Link href="tel:714-430-3810" className={styles.tel}>
            714-430-3810
          </Link>
        </div>
      </header>

      <MobileNavigator isNav={isMobileNavOpen} setNav={setIsMobileNavOpen} toggleRef={toggleRef} />
    </>
  );
};
