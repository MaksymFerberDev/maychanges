import Link from 'next/link';
import { Links } from '../../data';
import styles from './styles.module.css';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface TProps {
  isNav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavigator = ({ isNav, setNav }: TProps) => {
  const pathname = usePathname();

  return (
    <nav className={clsx(styles.main, isNav && styles.open)}>
      {Links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={clsx(
            styles.item,
            pathname === link.url && styles.active
          )}
          onClick={() => setNav(false)}
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </nav>
  )
}
