import React from "react";
import styles from "./Button.module.css";

export function Button({ children, variant = "gray", ...props }) {
  return (
    <button className={styles.button} data-variant={variant} {...props}>
      {children}
    </button>
  );
}
