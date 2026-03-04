import type { Week } from "../../../../utils/week";
import type { TCalendarDays, TCalendarTop } from "../../../types";

export type TCalendarUIProps = {
  top?: TCalendarTop;
  week: Week[];
  days: TCalendarDays;
};
