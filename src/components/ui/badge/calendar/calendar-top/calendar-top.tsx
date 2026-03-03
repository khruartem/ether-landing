import type { FC } from "react";

import type { TCalendarTopUIProps } from "./types";

import rightSVG from "../../../../../assets/icons/chevron-up.svg";
import leftSVG from "../../../../../assets/icons/chevron-down.svg";

import styles from "./calendar-top.module.css";

export const CalendarTopUI: FC<TCalendarTopUIProps> = ({ top }) => {
  return (
    <div className={styles.calendar__top}>
      <img
        src={leftSVG}
        className={styles.calendar__button}
        onClick={top.onClickLeft}
      />
      <span>{top.monthWithYear}</span>
      <img
        src={rightSVG}
        className={styles.calendar__button}
        onClick={top.onClickRight}
      />
    </div>
  );
};
