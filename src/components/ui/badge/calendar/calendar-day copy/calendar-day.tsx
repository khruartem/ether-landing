import type { FC } from "react";

import { TextUI } from "../../../text";

import type { TCalendarDayUIProps } from "./types";

import { Colors } from "../../../../../utils/colors";
import { Typography } from "../../../../../utils/typography";

import styles from "./calendar-day.module.css";

export const CalendarDayUI: FC<TCalendarDayUIProps> = ({ text }) => {
  return (
    <TextUI
      as={"span"}
      typography={Typography.Title_500_14}
      color={Colors.Nephritis100}
      className={styles["calendar-day"]}
    >
      {text}
    </TextUI>
  );
};
