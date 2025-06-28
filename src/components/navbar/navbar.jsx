import { useRouter } from 'next/router'; //this will help to detect which page user is on, for active links
import cx from 'classnames'; //helps for applying multiple classes
import styles from "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className={styles.navbarContent}>
      <div className={styles.logoSection}>
      <img
        className={styles.logo}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F026%2F757%2F818%2Fnon_2x%2Fgraduation-cap-with-ai-generated-free-png.png&f=1&nofb=1&ipt=62e6fb5f1c49b94046aedbf1e450a6de9d3c0a37e19ce954fce5270a40b56615"
        alt="Grad Cap"
      />
        <a className={styles.siteName} href="/">CollegeGenius</a> 
      </div>
      <div className={styles.linkContainer}>
        <a className={cx(styles.link, {
          [styles.active]: router.pathname === '/',
        })} href="/" >Home</a>
        <a className={styles.link} href="/about">About</a>
        <a className={styles.link} href="/features">Features</a>
      </div>
    </div>
  );
}