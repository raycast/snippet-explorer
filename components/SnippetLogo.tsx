import { RaycastLogoIcon, SnippetsIcon } from "./Icons";

import styles from "./SnippetLogo.module.css";

export function SnippetLogo() {
  return (
    <span className={styles.logo}>
      <SnippetsIcon size={22} />
      <RaycastLogoIcon size={22} />
    </span>
  );
}
