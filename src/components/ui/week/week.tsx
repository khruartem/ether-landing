import type { FC } from "react";

import { WeekDayUI } from "../week-day";

import type { TWeekUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./week.module.css";

export const WeekUI: FC<TWeekUIProps> = ({ week }) => {
  const weekStyle = useStyle();

  return (
    <ul className={styles.calendar__week} style={weekStyle}>
      {week.map((day, index) => {
        return <WeekDayUI key={index} day={day} />;
      })}
    </ul>
  );
};
