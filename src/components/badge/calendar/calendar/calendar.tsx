import type { FC } from "react";
import { CalendarUI } from "../../../ui/badge/calendar/calendar";

export const Calendar: FC = () => {
  const days: null[] = new Array(42).fill(null);
  const today = new Date();

  const firstDayOfWeek = (iMonth: number, iYear: number) => {
    return new Date(iYear, iMonth, 1).getDay();
  };

  const daysInMonth = (iMonth: number, iYear: number) => {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  };

  const weekDay = firstDayOfWeek(today.getMonth(), today.getFullYear());
  const lastDay = daysInMonth(today.getMonth(), today.getFullYear());

  const handleClickDay = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    styles: CSSModuleClasses,
  ) => {
    const calendar = e.currentTarget.closest("ul");
    const days = calendar?.querySelectorAll("li");
    const interval = e.currentTarget;
    const firstInterval = calendar?.querySelector(`.${styles.current1}`);
    const secondInterval = calendar?.querySelector(`.${styles.current2}`);

    if (firstInterval && secondInterval) {
      firstInterval.classList.remove(styles.current1);
      secondInterval.classList.remove(styles.current2);
      days?.forEach((day) => {
        day.classList.remove(styles.current);
      });
      interval.classList.add(styles.current1);
    } else if (firstInterval && !secondInterval) {
      interval.classList.add(styles.current2);
      days?.forEach((currentDay) => {
        const nextDay = currentDay.nextElementSibling;
        const prevDay = currentDay.previousElementSibling;

        if (
          (currentDay.classList.contains(styles.current1) ||
            currentDay.classList.contains(styles.current2)) &&
          !prevDay?.classList.contains(styles.current) &&
          !(
            nextDay?.classList.contains(styles.current1) ||
            nextDay?.classList.contains(styles.current2)
          ) &&
          !(
            prevDay?.classList.contains(styles.current1) ||
            prevDay?.classList.contains(styles.current2)
          )
        ) {
          nextDay?.classList.add(styles.current);
        }

        if (currentDay.classList.contains(styles.current)) {
          if (
            !(
              nextDay?.classList.contains(styles.current1) ||
              nextDay?.classList.contains(styles.current2)
            )
          )
            nextDay?.classList.add(styles.current);
        }
      });
    } else interval.classList.add(styles.current1);
  };

  return (
    <CalendarUI
      days={days}
      weekDayIndex={weekDay}
      lastDate={lastDay}
      onClickDay={handleClickDay}
    />
  );
};
