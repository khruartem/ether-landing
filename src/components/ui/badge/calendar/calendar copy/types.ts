import type { TCalendarDays, TCalendarTop } from "../../../../../utils/types";
import type { Week } from "../../../../../utils/week";

export type TCalendarUIProps = {
  top?: TCalendarTop;
  week: Week[];
  days: TCalendarDays;
};
