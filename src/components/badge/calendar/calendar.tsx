import { useState, type FC, type SyntheticEvent } from "react";

import { CalendarUI } from "../../ui/badge/calendar/calendar";

import { useCalendarWeeks } from "../../../hooks/calendar/useCalendarWeeks";
import { useCalendarDays } from "../../../hooks/calendar/useCalendarDays";

export const Calendar: FC = () => {
  const currentDate = new Date();
  const [currentDay, setCurrentDay] = useState<number | undefined>(
    currentDate.getDate(),
  );

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

  const week = useCalendarWeeks(
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const daysArray = useCalendarDays(
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
