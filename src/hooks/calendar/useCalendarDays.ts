export const useCalendarDays = (
  iWeekDay: number,
  iMonth: number,
  iYear: number,
) => {
  const length = 32 - new Date(iYear, iMonth, 32).getDate();
  const daysArray: number[] = new Array(length + iWeekDay).fill(1);

  return daysArray.map((day, index) =>
    index < iWeekDay ? (day -= 1) : (day += index - iWeekDay),
  );
};
