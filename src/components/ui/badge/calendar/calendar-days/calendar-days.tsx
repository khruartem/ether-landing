import type { FC } from "react";

import { CalendarDayUI } from "../calendar-day/calendar-day";

import type { TCalendarDaysUIProps } from "./types";

import styles from "./calendar-days.module.css";

export const CalendarDaysUI: FC<TCalendarDaysUIProps> = ({ days }) => {
  const { daysArray, currentDay, onClickDay } = days;

  return (
    <ul className={styles.calendar__days}>
      {daysArray.map((day, index) => {
        return (
          <CalendarDayUI
            key={index}
            day={day ? day : null}
            current={currentDay === day}
            onClickDay={onClickDay}
          />
        );
      })}
    </ul>
  );
};
