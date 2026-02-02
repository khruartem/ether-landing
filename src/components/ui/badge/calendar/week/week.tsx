import type { FC } from "react";

import { WeekDayUI } from "../week-day";

import type { TWeekUIProps } from "./types";

import styles from "./week.module.css";

export const WeekUI: FC<TWeekUIProps> = ({ days }) => {
  return (
    <ul className={styles.week}>
      {days.map((day, index) => {
        return (
          <li key={index} className={styles.week__day}>
            <WeekDayUI day={day} />
          </li>
        );
      })}
    </ul>
  );
};
