import { useState, type FC, type SyntheticEvent } from "react";

import { CalendarUI } from "../../ui/badge/calendar/calendar";

import { CalendarModel } from "../../../utils/calendarData";

export const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState<number | undefined>(
    currentDate.getDate(),
  );

  const calendar = new CalendarModel(currentDate);
  const cycleDuration = calendar.monthCycle;
  const monthWithYear = calendar.getMonthWithYear();
  const week = calendar.getWeeks();
  const daysArray = calendar.getDays();

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
    const today = new Date();

    const newDateMs =
      direction === "left" ? +date - cycleDuration : +date + cycleDuration;
    const newDate = new Date(newDateMs);
    const isCurrentMonth =
      newDate.getMonth() === today.getMonth() &&
      newDate.getFullYear() === today.getFullYear();

    setCurrentDate(newDate);
    setCurrentDay(isCurrentMonth ? today.getDate() : undefined);
  };

  return (
    <CalendarUI
      top={{
        monthWithYear,
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
