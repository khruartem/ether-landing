import type { FC } from "react";

export const Calendar: FC = () => {
  const date = new Date();

  date.setDate(1);
  const weekDay = date.getDay();
  const startDate = date.toDateString();

  date.setDate(0);
  const lastDay = date.getDate();
  const finishDate = date.toDateString();

  console.log(weekDay);
  console.log(startDate);
  console.log(lastDay);
  console.log(finishDate);
  return null;
};
