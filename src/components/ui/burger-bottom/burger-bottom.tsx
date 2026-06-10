import type { FC } from "react";

import type { TBurgerBottomUIProps } from "./types";

import styles from "./burger-bottom.module.css";

export const BurgerBottomUI: FC<TBurgerBottomUIProps> = ({ children }) => {
  return <div className={styles.burger__bottom}>{children}</div>;
};
