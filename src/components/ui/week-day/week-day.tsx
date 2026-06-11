import type { FC } from "react";

import { TextUI } from "../text";

import type { TWeekDayUIProps } from "./types";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import { useTypography } from "./useTypography";

import styles from "./week-day.module.css";

export const WeekDayUI: FC<TWeekDayUIProps> = ({ day }) => {
  const typographyDayLabel = useTypography();

  return (
    <TextUI
      as={"li"}
      typography={Typography[typographyDayLabel]}
      color={Colors.Light20}
      className={styles.week__day}
    >
      {day}
    </TextUI>
  );
};
