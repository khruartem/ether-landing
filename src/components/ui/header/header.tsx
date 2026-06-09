import type { FC } from "react";

import { Navigation } from "../../navigation";

import { useStyle } from "./useStyle";

import styles from "./header.module.css";

export const HeaderUI: FC = () => {
  const headerStyle = useStyle();

  return (
    <header className={styles.header} style={headerStyle}>
      <Navigation />
    </header>
  );
};
