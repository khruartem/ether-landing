import { useState, type FC } from "react";
import { CalendarUI } from "../../../ui/badge/calendar/calendar copy";
import { Week } from "../../../../utils/week";
import { Months } from "../../../../utils/months";
import type { TWeek } from "../../../../utils/types";

export const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState<number | undefined>(undefined);

  const cycleDuration = 30 * 24 * 60 * 60 * 1000;

  const getWeek: (iMonth: number, iYear: number) => TWeek = (
    iMonth: number,
    iYear: number,
  ) => {
    const weekArray: Week[] = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"];

    const currentDayCode = new Date(iYear, iMonth, 1).getDay();
    const currentDayName = Week[currentDayCode as keyof typeof Week];
    const currentDayIndex = weekArray.findIndex(
      (day) => day === currentDayName,
    );

    return { currentDayIndex, weekArray };
  };

  const getDays = (iWeekDay: number, iMonth: number, iYear: number) => {
    const length = 32 - new Date(iYear, iMonth, 32).getDate();
    const daysArray: number[] = new Array(length + iWeekDay).fill(1);

    return daysArray.map((day, index) =>
      index < iWeekDay ? (day -= 1) : (day += index - iWeekDay),
    );
  };

  const getDate = (date: Date, calendarDay: string) => {
    const dd = calendarDay.padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear());

    return `${dd}.${mm}.${yyyy}`;
  };

  const getMonthAndYear = (date: Date) => {
    const month = Months[date.getMonth() as keyof typeof Months];
    const year = date.getFullYear();

    return `${month}, ${year}`;
  };

  const handleClickDay = (day: number) => {
    setCurrentDay(day);
  };

  const handleChangeDate = (date: Date, direction: "right" | "left") => {
    const newDateMs =
      direction === "left" ? +date - cycleDuration : +date + cycleDuration;
    const newDate = new Date(newDateMs);

    setCurrentDate(newDate);
    setCurrentDay(undefined);
  };

  const week = getWeek(currentDate.getMonth(), currentDate.getFullYear());
  const daysArray = getDays(
    week.currentDayIndex,
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const dateLabel = getMonthAndYear(currentDate);

  // console.log(week);
  // console.log(selectedRange);

  return (
    <CalendarUI
      top={{
        dateLabel,
        onClickRight: () => handleChangeDate(currentDate, "right"),
        onClickLeft: () => handleChangeDate(currentDate, "left"),
      }}
      week={week.weekArray}
      days={{
        daysArray,
        currentDay: currentDay,
        onClickDay: (e) => {
          const day = e.currentTarget.textContent;
          handleClickDay(+day);
        },
      }}
    />
  );
};
