import LoginForm from "./LoginForm";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <LoginForm />
      </div>
    </div>
  );
}
