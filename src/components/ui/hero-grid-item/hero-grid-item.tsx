import type { FC } from "react";

import styles from "./hero-grid-item.module.css";
import type { THeroGridItemUIProps } from "./types";

export const HeroGridItemUI: FC<THeroGridItemUIProps> = ({
  children,
  noWrap,
}) => {
  return (
    <div
      className={styles.hero__grid__item}
      style={{ flexWrap: noWrap ? "nowrap" : "wrap" }}
    >
      {children}
    </div>
  );
};
