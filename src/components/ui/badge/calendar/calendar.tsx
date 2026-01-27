import type { FC } from "react";

import styles from "./calendar.module.css";

export const CalendarUI: FC = () => {
  const days = new Array(42).fill(null);

  const week = new Array(7).fill(null);

  return (
    <>
      <ul className={styles.week}>
        {week.map((_, index) => {
          return <li>{index + 1}</li>;
        })}
      </ul>
      <ul className={styles.calendar}>
        {days.map((item, index) => {
          return (
            <li className={styles.day}>{(index >= 4 && index <= 31 + 3) ? index - 3 : item}</li>
          );
        })}
      </ul>
    </>
  );
};
