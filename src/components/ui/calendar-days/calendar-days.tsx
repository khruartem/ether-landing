import type { FC } from "react";

import { CalendarDayUI } from "../calendar-day";

import type { TCalendarDaysUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./calendar-days.module.css";

export const CalendarDaysUI: FC<TCalendarDaysUIProps> = ({ days }) => {
  const calendarStyle = useStyle();

  const { daysArray, currentDay } = days;

  return (
    <ul className={styles.calendar__days} style={calendarStyle}>
      {daysArray.map((day, index) => {
        return (
          <CalendarDayUI
            key={index}
            day={day ? day : null}
            current={currentDay === day}
            emphasised={day && day < currentDay ? true : false}
          />
        );
      })}
    </ul>
  );
};
