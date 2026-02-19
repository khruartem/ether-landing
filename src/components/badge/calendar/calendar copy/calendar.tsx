import { useState, type FC } from "react";
import { CalendarUI } from "../../../ui/badge/calendar/calendar copy";
import { Week } from "../../../../utils/week";
import { Months } from "../../../../utils/months";

export const Calendar: FC = () => {
  const today = new Date();
  const cycleDuration = 30 * 24 * 60 * 60 * 1000; // Цикл: месяц в миллисекундах

  const [currentDateValue, setCurrentDateValue] = useState("");
  const [currentDate, setCurrentDate] = useState(() => {
    const month = Months[today.getMonth() as keyof typeof Months];
    const year = today.getFullYear();

    return `${month}, ${year}`;
  });

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

  const handleClickDay = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    styles: CSSModuleClasses,
  ) => {
    const calendarDate = getDate(today, e.currentTarget.textContent);
    setCurrentDateValue(calendarDate);

    e.currentTarget.classList.add(styles.current);
  };

  const handleChangeDate = (date: Date) => {
    const month = Months[date.getMonth() as keyof typeof Months];
    const year = date.getFullYear();

    setCurrentDate(`${month}, ${year}`);
  };

  const weekDay = getWeekDay(today.getMonth(), today.getFullYear());
  const days = getDays(today.getMonth(), today.getFullYear());

  console.log(weekDay);
  console.log(days);
  console.log(getDate(today, "20"));

  return (
    <CalendarUI
      currentDate={currentDate}
      onChangeDateRight={() => handleChangeDate(currentDate)}
    />
  );
};
