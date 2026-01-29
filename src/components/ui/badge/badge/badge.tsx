import type { CSSProperties, FC } from "react";

import { BadgeTitleUI } from "../badge-title";

import type { TBadgeUIProps } from "./types";

import styles from "./badge.module.css";

export const BadgeUI: FC<TBadgeUIProps> = ({ title, gap = 4, children }) => {
  return (
    <div
      className={styles.hero__block}
      style={{ "--gap": `${gap}px` } as CSSProperties}
    >
      {title && <BadgeTitleUI title={title} />}
      {children}
    </div>
  );
};
