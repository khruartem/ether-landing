import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../../../text";

import type { TCalendarDayUIProps } from "./types";

import { Colors } from "../../../../../utils/colors";
import { Typography } from "../../../../../utils/typography";

import styles from "./calendar-day.module.css";

export const CalendarDayUI: FC<TCalendarDayUIProps> = ({
  day,
  current,
  onClickDay,
}) => {
  return (
    <TextUI
      as={"li"}
      typography={Typography.Title_500_14}
      color={Colors.Nephritis100}
      className={clsx(day && styles.calendar__day, current && styles.current)}
      onClick={onClickDay}
    >
      {day}
    </TextUI>
    // <li
    //   className={clsx(day && [styles.calendar__day, stylesAbove.calendar__day], current && [styles.current, stylesAbove.current])}
    //   onClick={onClickDay}
    //   // onMouseEnter={(e) => e.currentTarget.classList.add(stylesAbove.calendar__day)}
    //   // onMouseLeave={(e) => e.currentTarget.classList.remove(stylesAbove.calendar__day)}
    // >
    //   {day}
    // </li>
  );
};
