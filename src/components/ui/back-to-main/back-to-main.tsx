import type { FC } from "react";
import { Link } from "react-router-dom";

import { TextUI } from "../text";
import { Icon } from "../../icon";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./back-to-main.module.css";

export const BackToMainUI: FC = () => {
  return (
    <Link
      to="https://otkter.ru/"
      target="_blank"
      className={styles["back-to-main"]}
    >
      <TextUI
        as={"span"}
        typography={Typography.Title_400_14}
        color={Colors.Nephritis100}
      >
        {"Открытая Территория"}
      </TextUI>
      <Icon
        name={"OT"}
        width={34}
        height={20}
        className={styles["back-to-main__logo"]}
      />
    </Link>
  );
};
