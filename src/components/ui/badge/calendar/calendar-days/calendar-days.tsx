import type { FC } from "react";

import { CalendarDayUI } from "../calendar-day/calendar-day";

import type { TCalendarDaysUIProps } from "./types";

import styles from "./calendar-days.module.css";

export const CalendarDaysUI: FC<TCalendarDaysUIProps> = ({
  days,
  onClickDay,
}) => {
  return (
    <ul className={styles.calendar__days}>
      {days.map((day, index) => {
        return (
          <CalendarDayUI
            key={index}
            day={day ? day : null}
            onClickDay={onClickDay}
          />
        );
      })}
    </ul>
  );
};
