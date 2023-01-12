import { RaycastLogoIcon, SnippetsIcon } from "./Icons";

import styles from "./SnippetLogo.module.css";

export function SnippetLogo() {
  return (
    <span className={styles.logo}>
      <SnippetsIcon size={16} />
      <RaycastLogoIcon size={16} />
    </span>
  );
}
