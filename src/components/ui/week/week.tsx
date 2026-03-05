import type { FC } from "react";

import { WeekDayUI } from "../week-day";

import type { TWeekUIProps } from "./types";

import styles from "./week.module.css";

export const WeekUI: FC<TWeekUIProps> = ({ week }) => {
  return (
    <ul className={styles.calendar__week}>
      {week.map((day, index) => {
        return <WeekDayUI key={index} day={day} />;
      })}
    </ul>
  );
};
