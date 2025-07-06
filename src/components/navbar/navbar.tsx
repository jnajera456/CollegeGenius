import { useRouter } from 'next/router'; //this will help to detect which page user is on, for active links
import React from 'react';
import cx from 'classnames'; //helps for applying multiple classes
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.navbarContent}>
      <div className={styles.logoSection}>
        <Image className={styles.logo}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F026%2F757%2F818%2Fnon_2x%2Fgraduation-cap-with-ai-generated-free-png.png&f=1&nofb=1&ipt=62e6fb5f1c49b94046aedbf1e450a6de9d3c0a37e19ce954fce5270a40b56615"
        alt="CollegeGenius Logo"
        height={40}
        width={40}
        unoptimized>
        </Image>
        <Link href="/" className={styles.siteName}>
          CollegeGenius
        </Link> 
      </div>
      <div className={styles.linkContainer}>
        <Link
          href="/"
          className={cx(styles.link, router.pathname === '/' && styles.activeLink)}>
          Home
        </Link>
        
        <Link href="/login" className={cx(styles.link, router.pathname === '/login' && styles.activeLink)}>
          Get Started
        </Link>

        <Link href="/features" className={styles.link}>
          Features
        </Link>
      </div>
    </div>
  );
};

export default Navbar;