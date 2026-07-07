import type { FC } from "react";
import { TextUI } from "../text";
import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";
import type { TCopyrightUIProps } from "./types";

import styles from "./copyright.module.css";
import { Link } from "react-router-dom";
import { useStyle } from "./useStyle";

export const CopyrightUI: FC<TCopyrightUIProps> = ({ year }) => {
  const copyrightStyle = useStyle();

  return (
    <TextUI
      typography={Typography.Text_400_14}
      color={Colors.Light100}
      className={styles.copyright}
      style={copyrightStyle}
    >
      <TextUI
        as={"span"}
        typography={"inherit"}
        color="inherit"
        className={styles.copyright__year}
      >
        {`${year} `}
      </TextUI>
      <TextUI as={"span"} typography={"inherit"} color="inherit">
        {"Создано под эгидой творческой экосистемы "}
      </TextUI>
      <TextUI as={"span"} typography={"inherit"} color="inherit">
        <Link
          to={"https://otkter.ru/"}
          target="_blank"
          className={styles.copyright__link}
        >
          {"«Открытая Территория»"}
        </Link>
      </TextUI>
    </TextUI>
  );
};
