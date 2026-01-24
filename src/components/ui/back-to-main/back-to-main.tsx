import type { FC } from "react";

import { OTLabel } from "../../ot-label";
import { OTLogo } from "../../icons";

import styles from "./back-to-main.module.css";

export const BackToMainUI: FC = () => {
  return (
    <a
      href="https://otkter.ru/"
      target="_blank"
      className={styles["back-to-main"]}
    >
      <OTLabel />
      <OTLogo />
    </a>
  );
};
