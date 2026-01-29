import type { FC } from "react";
import { WeekUI } from "../../../ui/badge/calendar/week";

export const Week: FC = () => {
  const days: string[] = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  return <WeekUI days={days} />;
};
