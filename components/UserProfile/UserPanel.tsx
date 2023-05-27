import { useAuth } from "@/components/AuthProvider";

import styles from "./userPanel.module.css";

const UserPanel = () => {
  const { user, logout } = useAuth();
  return (
    <ul className={styles.userPanel}>
      <li>
        <div>{user?.name}</div>
      </li>
      <li>
        <button onClick={() => logout()}>Logout</button>
      </li>
    </ul>
  );
};

export default UserPanel;
