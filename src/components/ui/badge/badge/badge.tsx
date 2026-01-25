import type { FC } from "react";

import { BadgeTitleUI } from "../badge-title";

import type { TBadgeUIProps } from "./types";

import styles from "./badge.module.css";

export const BadgeUI: FC<TBadgeUIProps> = ({ title, children }) => {
  return (
    <div className={styles.hero__block}>
      {title && <BadgeTitleUI title={title} />}
      {children}
    </div>
  );
};
