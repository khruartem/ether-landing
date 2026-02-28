import { Months } from "../../utils/months";

export const useCalendarMonthAndYear = (date: Date) => {
  const month = Months[date.getMonth() as keyof typeof Months];
  const year = date.getFullYear();

  return `${month}, ${year}`;
};
