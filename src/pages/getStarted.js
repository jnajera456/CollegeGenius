import styles from "./getStarted.module.css";

export default function GetStarted() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginBoxContent}>
          <h2>Login</h2>
          <div className={styles.formsContainer}>
            <form>
              <div className={styles.inputBox}>
                <input type="email" id="email" placeholder="Email Address" />
              </div>
            </form>
            <form>
              <div className={styles.inputBox}>
                <input type="password" id="password" placeholder="Password" />
              </div>
            </form>
          </div>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </div>
  );
}
