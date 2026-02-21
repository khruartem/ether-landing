import type { FC } from "react";

import type { TCalendarTopUIProps } from "./types";

import rightSVG from "../../../../../assets/icons/chevron-up.svg";
import leftSVG from "../../../../../assets/icons/chevron-down.svg";

import styles from "./calendar-top.module.css";

export const CalendarTopUI: FC<TCalendarTopUIProps> = ({
  dateLabel,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className={styles.calendar__top}>
      <img
        src={leftSVG}
        className={styles.calendar__button}
        onClick={onClickLeft}
      />
      <span>{dateLabel}</span>
      <img
        src={rightSVG}
        className={styles.calendar__button}
        onClick={onClickRight}
      />
    </div>
  );
};
