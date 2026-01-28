import type { FC } from "react";

import styles from "./calendar.module.css";
import type { TCalendarUIProps } from "./types";

export const CalendarUI: FC<TCalendarUIProps> = ({
  weekDayIndex,
  lastDate,
}) => {
  const days: null[] = new Array(42).fill(null);

  const week: string[] = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  const renderDays = (item: null, index: number) => {
    if (weekDayIndex === 0) {
      return index < 6 ? item : index - 5 <= lastDate ? index - 5 : item;
    } else {
      return index >= weekDayIndex - 1 && index <= lastDate + weekDayIndex - 2
        ? index - weekDayIndex + 2
        : item;
    }
  };

  return (
    <>
      <ul className={styles.week}>
        {week.map((day) => {
          return <li>{day}</li>;
        })}
      </ul>
      <ul className={styles.calendar}>
        {days.map((item, index) => {
          return (
            <li className={styles.day}>
              {/* {index >= weekDayIndex - 1 && index <= lastDate + weekDayIndex - 2
                ? index - weekDayIndex + 2
                : item} */}
              {renderDays(item, index)}
            </li>
          );
        })}
      </ul>
    </>
  );
};
