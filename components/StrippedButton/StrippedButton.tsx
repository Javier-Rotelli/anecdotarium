import { ComponentProps, HTMLProps } from "react";

import styles from "./styles.module.css";

const StrippedButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={styles.strippedButton}>
    {children}
  </button>
);

export default StrippedButton;
