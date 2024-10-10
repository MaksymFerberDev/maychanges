import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

export const Company = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Companies</h1>
      <div className={styles.main}>
        <Link href="https://metalsolutionsholdings.com/" target='_blank' className={styles.metal}>
          <Image
            src="/assets/pictures/companies/logo_msh.png"
            width={204}
            height={39}
            alt="Metal Solutions Holdings Logo"
          />
        </Link>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>Metal Solutions Holdings(an Industrial Succession Holding Company) is creating a network of metal fabricators that service time sensitive and/or highly engineered applications and provide an all-inclusive service to customers.</p>
            <p>While many investors know about the succession issue in the USA, the problem is particularly bad in the community of ~600 metal fabricators and installers in Southern California. Many sellers are looking to leave the state and in order to make quick sales they do so at the expense of price and structure. By answering their needs and acquiring these businesses, we plan to scale quickly in CA. Once we have proven this model works, we plan on expanding to other states.</p>
            <Link href='https://metalsolutionsholdings.com/' target='_blank' className={styles.visit}>Visit Website <Image src='/assets/icons/globe_icon.svg' alt='globe icon' width={24} height={24} /></Link>
            <Image src='/assets/icons/vector_arrow.svg' alt='arrow' width={205} height={173} className={styles.vector} />
          </div>

          <div className={styles.platforms}>
            <h4 className={styles.platformsTitle}>Platforms</h4>

            <Link href='https://asmsheetmetal.com/' target='_blank' className={styles.whitePlatform}>
              <Image src='/assets/pictures/companies/asm_logo.png' alt='asm platform' width={147} height={67} />
              <Image src='/assets/icons/arrow_black.svg' alt='arrow' width={24} height={24} />
            </Link>

            <Link href='https://www.pendarvismanufacturing.com/' target='_blank' className={styles.blackPlatform}>
              <Image src='/assets/pictures/companies/pendarvis_logo.png' alt='pen platform' width={274} height={67} />
              <Image src='/assets/icons/arrow_white.svg' alt='arrow' width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
