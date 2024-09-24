import Image from 'next/image';
import styles from './styles.module.css';
import { Links } from '../Header/data';
import Link from 'next/link';
import { Contact } from './data';

export const Footer = () => {
  const date = new Date();

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
                <>
                  {contact.url ? (
                    <Link
                      key={contact.id}
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
                      key={contact.id}
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
                </>
              ))}
            </div>
            <div className={styles.navigator}>
              {Links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.item}
                >
                  {link.name}
                </Link>
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
