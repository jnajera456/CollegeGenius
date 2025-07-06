import styles from "./login.module.css";
import Link from "next/link";
/**import cx from "classnames";**/

export default function Login() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginBoxContent}>
          <h2>Sign In</h2>
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
          <button className={styles.loginButton}>Sign In</button>
          <div className={styles.forgotLinkContainer}>
            <Link className={styles.forgotLink} href="/">
              Forgot Password?
            </Link>
          </div>
          <div className={styles.signupContainer}>
            <p>New to CollegeGenius?</p>&nbsp;
            <Link className={styles.signupLink} href="/">
              Sign up now.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
