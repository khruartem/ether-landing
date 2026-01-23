import type { FC } from "react";

import { EtherLogo, OTLogo } from "../../icons";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-left"]}>
        <EtherLogo />
        <Navigation />
      </div>
      <OTLogo />
    </header>
  );
};
