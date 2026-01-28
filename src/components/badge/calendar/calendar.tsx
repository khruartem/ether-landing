import type { FC } from "react";
import { CalendarUI } from "../../ui/badge/calendar";

export const Calendar: FC = () => {
  const today = new Date();

  const firstDayOfWeek = (iMonth: number, iYear: number) => {
    return new Date(iYear, iMonth, 1).getDay();
  };

  const daysInMonth = (iMonth: number, iYear: number) => {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  };

  const weekDay = firstDayOfWeek(today.getMonth(), today.getFullYear());
  const lastDay = daysInMonth(today.getMonth(), today.getFullYear());

  // today.setDate(1);
  // const weekDay = today.getDay();
  // const startDate = today.toDateString();

  // today.setDate(0);
  // const lastDay = today.getDate();
  // const finishDate = today.toDateString();

  console.log(weekDay);
  // console.log(startDate);
  console.log(lastDay);
  // console.log(finishDate);

  return <CalendarUI weekDayIndex={weekDay} lastDate={lastDay} />;
};
