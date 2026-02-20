import type { FC } from "react";

import { CalendarDayUI } from "../calendar-day";
import { Week } from "../../../../badge/calendar/week";

import type { TCalendarUIProps } from "./types";

import styles from "./calendar.module.css";

export const CalendarUI: FC<TCalendarUIProps> = ({
  dateLabel,
  inputValue,
  currentWeekDay,
  daysArray,
  voidDaysArray,
  onClickDay,
  onClickRight,
  onClickLeft,
}) => {
  // const renderDays = (item: null, index: number) => {
  //   if (weekDayIndex === 0) {
  //     return index < 6 ? (
  //       item
  //     ) : index - 5 <= lastDate ? (
  //       <CalendarDayUI text={`${index - 5}`} />
  //     ) : (
  //       item
  //     );
  //   } else {
  //     return index >= weekDayIndex - 1 &&
  //       index <= lastDate + weekDayIndex - 2 ? (
  //       <CalendarDayUI text={`${index - weekDayIndex + 2}`} />
  //     ) : (
  //       item
  //     );
  //   }
  // };

  return (
    <>
      <button onClick={onClickRight}>{"Right"}</button>
      <span>{dateLabel}</span>
      <button onClick={onClickLeft}>{"Left"}</button>
      <Week />
      <ul className={styles.calendar}>
        {voidDaysArray.map((item) => (
          <li>{item}</li>
        ))}
        {daysArray.map((item, index) => {
          return (
            <li
              key={index}
              onClick={(e) => onClickDay(e, styles)}
              className={styles["calendar-day"]}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};
