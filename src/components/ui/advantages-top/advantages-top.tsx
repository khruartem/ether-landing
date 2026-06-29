import type { FC } from "react";

import type { TAdvantagesTopUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./advantages-top.module.css";

export const AdvantagesTopUI: FC<TAdvantagesTopUIProps> = ({ children }) => {
  const topStyle = useStyle();

  return (
    <div className={styles.advantages__top} style={topStyle}>
      {children}
    </div>
  );
};
