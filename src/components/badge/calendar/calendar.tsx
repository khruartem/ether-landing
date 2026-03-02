import { useState, type FC, type SyntheticEvent } from "react";

import { CalendarUI } from "../../ui/badge/calendar/calendar";

import { useCalendarWeeks } from "../../../hooks/calendar/useCalendarWeeks";
import { useCalendarDays } from "../../../hooks/calendar/useCalendarDays";
import { useCalendarMonthAndYear } from "../../../hooks/calendar/useCalendarMonthAndYear";

export const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState<number | undefined>(currentDate.getDate());

  const cycleDuration = 30 * 24 * 60 * 60 * 1000;
  const dateLabel = useCalendarMonthAndYear(currentDate);
  const week = useCalendarWeeks(
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const daysArray = useCalendarDays(
    week.currentDayIndex,
    currentDate.getMonth(),
    currentDate.getFullYear(),
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

  const handleChangeDate = (date: Date, direction: "right" | "left") => {
    const newDateMs =
      direction === "left" ? +date - cycleDuration : +date + cycleDuration;
    const newDate = new Date(newDateMs);

    setCurrentDate(newDate);
    setCurrentDay(undefined);
  };

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
          handlerMouseEnterDay(e);
        },
        onMouseEnterDay: handlerMouseEnterDay,
        onMouseLeaveDay: handlerMouseEnterDay,
      }}
    />
  );
};
