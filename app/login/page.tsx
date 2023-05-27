import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <input type="email" id="email" placeholder="email" />
        <input type="password" id="password" placeholder="password" />
        <input type="button" value="Login" />
      </div>
    </div>
  );
}
