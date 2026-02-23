import type { FC } from "react";

import { CalendarTopUI } from "../calendar-top";
import { WeekUI } from "../week";
import { CalendarDaysUI } from "../calendar-days";

import type { TCalendarUIProps } from "./types";

import styles from "./calendar.module.css";

export const CalendarUI: FC<TCalendarUIProps> = ({ top, week, days }) => {
  return (
    <div className={styles.calendar}>
      {top && <CalendarTopUI top={top} />}
      <WeekUI week={week} />
      <CalendarDaysUI days={days} />
    </div>
  );
};
