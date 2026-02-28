import type { TWeek } from "../../utils/types";
import { Week } from "../../utils/week";

export const useCalendarWeeks: (iMonth: number, iYear: number) => TWeek = (
  iMonth: number,
  iYear: number,
) => {
  const weekArray: Week[] = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"];

  const currentDayCode = new Date(iYear, iMonth, 1).getDay();
  const currentDayName = Week[currentDayCode as keyof typeof Week];
  const currentDayIndex = weekArray.findIndex((day) => day === currentDayName);

  return { currentDayIndex, weekArray };
};
