"use client";

import Link from "next/link";
import { Links } from "./data";
import styles from './styles.module.css';
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileNavigator } from "./components";

export const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={styles.main}>
        <div className={styles.content}>
          <Link href='/' className={styles.logo}>
            <Image
              src="/assets/pictures/industrial_logo.jpg"
              alt="logo"
              width={168}
              height={40}
            />
          </Link>

          <nav className={styles.navigator}>
            {Links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={clsx(
                  styles.item,
                  pathname === link.url && styles.active
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div
            className={clsx(styles.mobileNav, isMobileNavOpen && styles.open)}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
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

      <MobileNavigator isNav={isMobileNavOpen} setNav={setIsMobileNavOpen} />
    </>
  );
};
