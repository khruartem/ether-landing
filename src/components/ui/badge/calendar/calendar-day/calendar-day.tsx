import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../../../text";

import type { TCalendarDayUIProps } from "./types";

import { Colors } from "../../../../../utils/colors";
import { Typography } from "../../../../../utils/typography";

import "./calendar-day.css";

export const CalendarDayUI: FC<TCalendarDayUIProps> = ({
  day,
  current,
  emphasised,
}) => {
  return (
    <TextUI
      as={"li"}
      typography={Typography.Title_500_14}
      color={Colors.Nephritis100}
      className={clsx(
        day && "calendar__day",
        current && "current",
        emphasised && "calendar__day_range",
      )}
    >
      {day}
    </TextUI>
  );
};
