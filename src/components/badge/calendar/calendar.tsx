import { useState, type FC, type SyntheticEvent } from "react";

import { CalendarUI } from "../../ui/badge/calendar/calendar copy";

import { Week } from "../../../utils/week";
import type { TWeek } from "../../../utils/types";

export const Calendar: FC = () => {
  const currentDate = new Date();
  const [currentDay, setCurrentDay] = useState<number | undefined>(
    currentDate.getDate(),
  );

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

  const handleClickDay = (day: number) => {
    setCurrentDay(day === currentDay ? undefined : day);
  };

  const handlerMouseEnterDay = (e: SyntheticEvent) => {
    const hoveredDayValue = +e.currentTarget.textContent;
    if (hoveredDayValue === currentDay) return;

    const hoveredDay = e.currentTarget;
    const rangeLength = Math.abs(Number(currentDay) - hoveredDayValue);

    let proxyElement = hoveredDay;
    for (let i = 0; i < rangeLength; i++) {
      if (Number(currentDay) > +hoveredDayValue) {
        const nextDay = proxyElement.nextElementSibling as EventTarget &
          HTMLLIElement;

        if (nextDay && hoveredDayValue !== 0) {
          nextDay.classList.toggle("calendar__day_range");
          proxyElement = nextDay;
        }
      }

      if (Number(currentDay) < +hoveredDayValue) {
        const previousDay = proxyElement.previousElementSibling as EventTarget &
          HTMLLIElement;

        if (previousDay && hoveredDayValue !== 0) {
          previousDay.classList.toggle("calendar__day_range");
          proxyElement = previousDay;
        }
      }
    }
  };

  const week = getWeek(currentDate.getMonth(), currentDate.getFullYear());
  const daysArray = getDays(
    week.currentDayIndex,
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );

  return (
    <CalendarUI
      week={week.weekArray}
      days={{
        daysArray,
        currentDay: currentDay,
        onClickDay: (e) => {
          const day = e.currentTarget.textContent;
          handleClickDay(+day);
          handlerMouseEnterDay(e);
        },
        onMouseEnterDay: handlerMouseEnterDay,
        onMouseLeaveDay: handlerMouseEnterDay,
      }}
    />
  );
};
