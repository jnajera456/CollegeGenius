import styles from "./login.module.css";
import Link from "next/link";

/**import cx from "classnames";**/

export default function Signup() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginBoxContent}>
          <h2>Get Started!</h2>
          <p>Create A Free Account</p>
          <div>
            <form className={styles.formContainer}>
              <div className={styles.inputBox}>
                <input type="email" id="email" placeholder="Email Address" />
              </div>
              <div className={styles.inputBox}>
                <input type="password" id="password" placeholder="Password" />
              </div>
            </form>
          </div>
          <button className={styles.loginButton}>Create Account</button>
          <div className={styles.signupContainer}>
            <p>Already have an account?</p>&nbsp;
            <Link className={styles.signupLink} href="/login">
              Log in.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
