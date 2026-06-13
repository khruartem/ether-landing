import type { FC } from "react";

import { TextUI } from "../text";

import type { TDateTimeUIProps } from "./types";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import { useTypography } from "./useTypography";

import styles from "./date-time.module.css";

export const DateTimeUI: FC<TDateTimeUIProps> = ({ date, time }) => {
  const dateTimeTypography = useTypography();

  return (
    <div className={styles["date-time"]}>
      <TextUI
        as={"span"}
        typography={Typography[dateTimeTypography]}
        color={Colors.Dark80}
      >
        {date}
      </TextUI>
      <TextUI
        as={"span"}
        typography={Typography[dateTimeTypography]}
        color={Colors.Dark80}
        className={styles["bordered"]}
      >
        {time}
      </TextUI>
    </div>
  );
};
