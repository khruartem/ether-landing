import { useState, type FC } from "react";
import { CalendarUI } from "../../../ui/badge/calendar/calendar copy";
import { Week } from "../../../../utils/week";
import { Months } from "../../../../utils/months";

export const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentInputValue, setCurrentInputValue] = useState("");

  const cycleDuration = 30 * 24 * 60 * 60 * 1000;

  const getWeekDay: (
    iMonth: number,
    iYear: number,
  ) => { dayIndex: number; dayName: Week } = (
    iMonth: number,
    iYear: number,
  ) => {
    const week: Week[] = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"];

    const dayCode = new Date(iYear, iMonth, 1).getDay();
    const dayName = Week[dayCode as keyof typeof Week];
    const dayIndex = week.findIndex((day) => day === dayName);

    return { dayIndex, dayName };
  };

  const getDays = (iMonth: number, iYear: number) => {
    const length = 32 - new Date(iYear, iMonth, 32).getDate();
    const days: number[] = new Array(length).fill(1);

    return days.map((day, index) => (day += index));
  };

  const getDate = (date: Date, calendarDay: string) => {
    const dd = calendarDay.padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear());

    return `${dd}.${mm}.${yyyy}`;
  };

  const getMonthAndYear = (date: Date) => {
    const month = Months[date.getMonth() as keyof typeof Months];
    const year = date.getFullYear();

    return `${month}, ${year}`;
  };

  const handleClickDay = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    styles: CSSModuleClasses,
  ) => {
    const calendar = e.currentTarget.closest("ul");
    const days = calendar?.querySelectorAll("li");
    days?.forEach((day) => {
      if (day.classList.contains(styles.current)) {
        day.classList.remove(styles.current);
      }
    });

    const calendarDate = getDate(currentDate, e.currentTarget.textContent);
    setCurrentInputValue(calendarDate);

    e.currentTarget.classList.add(styles.current);
  };

  const handleChangeDate = (date: Date, direction: "right" | "left") => {
    const newDateMs =
      direction === "left" ? +date - cycleDuration : +date + cycleDuration;
    const newDate = new Date(newDateMs);

    setCurrentDate(newDate);
  };

  const currentWeekDay = getWeekDay(
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const daysArray = getDays(currentDate.getMonth(), currentDate.getFullYear());
  const voidDaysArray: null[] = new Array(currentWeekDay.dayIndex).fill(null);
  const dateLabel = getMonthAndYear(currentDate);

  // console.log(currentWeekDay);
  // console.log(daysArray);

  return (
    <CalendarUI
      dateLabel={dateLabel}
      inputValue={currentInputValue}
      currentWeekDay={currentWeekDay}
      daysArray={daysArray}
      voidDaysArray={voidDaysArray}
      onClickDay={handleClickDay}
      onClickRight={() => handleChangeDate(currentDate, "right")}
      onClickLeft={() => handleChangeDate(currentDate, "left")}
    />
  );
};
