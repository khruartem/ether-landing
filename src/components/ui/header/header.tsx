import type { FC } from "react";

import { Logo } from "../../logo";
import { Menu } from "../../menu";
import { BackToMainUI } from "../back-to-main";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-left"]}>
        <Logo type={"sign"} />
        <Menu />
      </div>
      <BackToMainUI />
    </header>
  );
};
