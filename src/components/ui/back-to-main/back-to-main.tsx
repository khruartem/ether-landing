import type { FC } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../icon";

import { OTLabel } from "../../ot-label";

import styles from "./back-to-main.module.css";

export const BackToMainUI: FC = () => {
  return (
    <Link
      to="https://otkter.ru/"
      target="_blank"
      className={styles["back-to-main"]}
    >
      <OTLabel />
      <Icon
        name={"OT"}
        width={34}
        height={20}
        className={styles["back-to-main__logo"]}
      />
    </Link>
  );
};
