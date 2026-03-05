import { type FC } from "react";

import { WeekUI } from "../ui/week";
import { CalendarDaysUI } from "../ui/calendar-days";

import { CalendarModel } from "../../utils/calendarData";

export const Calendar: FC = () => {
  const date = new Date(2026, 7);
  const calendar = new CalendarModel(date);

  const week = calendar.getWeeks().weekArray;
  const days = { daysArray: calendar.getDays(), currentDay: 7 };

  return (
    <>
      <WeekUI week={week} />
      <CalendarDaysUI days={days} />
    </>
  );
};
