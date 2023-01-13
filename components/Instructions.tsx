import styles from "./Instructions.module.css";

export function Instructions() {
  return (
    <div className={styles.root}>
      <Skeleton />
      <Skeleton selected />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

function Skeleton({ selected = false }) {
  return (
    <div className={styles.skeleton} data-selected={selected}>
      <div className={styles.skeletonPrimary} />
      <div className={styles.skeletonSecondary} />
      {selected && <div className={styles.skeletonCursor} />}
    </div>
  );
}
