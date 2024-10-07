'use client';

import { Dispatch, RefObject, SetStateAction } from 'react';
import { useClickOutside } from '@/components/hooks/useClickOutside';
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Links } from '../../data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface TProps {
  isNav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
  toggleRef: RefObject<HTMLDivElement>;
}

export const MobileNavigator = ({ isNav, setNav, toggleRef }: TProps) => {
  const pathname = usePathname();
  const headerRef = useClickOutside(() => setNav(false), toggleRef) as RefObject<HTMLDivElement>;

  const scrollHandler = (item: string) => {
    setNav(false);

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
    <nav className={clsx(styles.main, isNav && styles.open)} ref={headerRef}>
      {Links.map((link) => (
        <React.Fragment key={link.id}>
          {link.url ? (
            <Link
              href={link.url}
              className={clsx(styles.item, pathname === link.url && styles.active)}
              onClick={() => setNav(false)}
            >
              <p>{link.name}</p>
            </Link>
          ) : (
            <div
              className={clsx(styles.item, pathname === link.url && styles.active)}
              onClick={() => scrollHandler(link.scroll)}
            >
              <p>{link.name}</p>
            </div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
