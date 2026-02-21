import type { FC } from "react";

import { CalendarTopUI } from "../calendar-top";
import { WeekUI } from "../week";
import { CalendarDaysUI } from "../calendar-days";

import type { TCalendarUIProps } from "./types";

import styles from "./calendar.module.css";

export const CalendarUI: FC<TCalendarUIProps> = ({ top, week, days }) => {
  const { daysArray, onClickDay } = days;

  return (
    <div className={styles.calendar}>
      {top && (
        <CalendarTopUI
          dateLabel={top.dateLabel}
          onClickLeft={top.onClickLeft}
          onClickRight={top.onClickRight}
        />
      )}
      <WeekUI week={week} />
      <CalendarDaysUI days={daysArray} onClickDay={onClickDay} />
    </div>
  );
};
