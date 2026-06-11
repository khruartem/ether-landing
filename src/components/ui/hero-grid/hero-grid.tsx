import type { FC } from "react";

import type { THeroGridUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./hero-grid.module.css";

export const HeroGridUI: FC<THeroGridUIProps> = ({ children }) => {
  const gridStyle = useStyle();

  return (
    <div className={styles.hero__grid} style={gridStyle}>
      {children}
    </div>
  );
};
