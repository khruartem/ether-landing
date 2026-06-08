import type { FC } from "react";

import { Logo } from "../../logo";
import { Menu } from "../../menu";
import { BackToMainUI } from "../back-to-main";

import { useStyle } from "./useStyle";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  const headerStyle = useStyle();

  return (
    <header className={styles.header} style={headerStyle}>
      <div className={styles["header__left"]}>
        <Logo type={"sign"} />
        <Menu />
      </div>
      <BackToMainUI />
    </header>
  );
};
