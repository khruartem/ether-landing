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

  return <CalendarUI days={days} weekDayIndex={weekDay} lastDate={lastDay} />;
};
