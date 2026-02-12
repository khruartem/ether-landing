import type { FC } from "react";
import { CalendarUI } from "../../../ui/badge/calendar/calendar";
import { Week } from "../../../../utils/week";

export const Calendar: FC = () => {
  const today = new Date();

  const getWeekDay: (
    iMonth: number,
    iYear: number,
  ) => { dayIndex: number; dayName: Week } = (
    iMonth: number,
    iYear: number,
  ) => {
    const week: Week[] = ["пн", "вт", "ср", "чт", "пт", "сб"];

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

  const handleClickDay = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    // styles: CSSModuleClasses,
  ) => {
    console.log(e.currentTarget.textContent);
  };

  const weekDay = getWeekDay(today.getMonth(), today.getFullYear());
  const days = getDays(today.getMonth(), today.getFullYear());

  console.log(weekDay);
  console.log(days);

  return (
    <ul>
      <li key={0} onClick={(e) => handleClickDay(e)}>
        {"CALENDAAAAAAAAAAAAAAAAAR"}
      </li>
    </ul>
  );
};
