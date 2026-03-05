import type { FC } from "react";

import type { THeroGridUIProps } from "./types";

import styles from "./hero-grid.module.css";

export const HeroGridUI: FC<THeroGridUIProps> = ({ children }) => {
  return <div className={styles.hero__grid}>{children}</div>;
};
