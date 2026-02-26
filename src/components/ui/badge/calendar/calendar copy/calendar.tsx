import type { FC } from "react";

import { CalendarTopUI } from "../calendar-top";
import { WeekUI } from "../week";
import { CalendarDaysUI } from "../calendar-days";

import type { TCalendarUIProps } from "./types";

export const CalendarUI: FC<TCalendarUIProps> = ({ top, week, days }) => {
  return (
    <>
      {top && <CalendarTopUI top={top} />}
      <WeekUI week={week} />
      <CalendarDaysUI days={days} />
    </>
  );
};
