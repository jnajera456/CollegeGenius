import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <h1 className={styles.collegeGenius}>CollegeGenius</h1>
      </div>
      <div className={styles.pageLinksContainer}>
        <Link className={styles.pageLink} href="http://localhost:3000/">
          Home
        </Link>
        <Link className={styles.pageLink} href="https://www.hulu.com/welcome">
          Explore Courses
        </Link>
        <Link className={styles.pageLink} href="/profile">
          Profile
        </Link>
      </div>
    </div>
  );
}
