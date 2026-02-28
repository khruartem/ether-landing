import { useState, type ChangeEvent, type FC } from "react";

import { BadgeTitleUI } from "../../ui/badge/badge-title";
import { DatePickerUI } from "../../ui/badge/date-picker";

import { useCalendarWeeks } from "../../../hooks/calendar/useCalendarWeeks";
import { useCalendarDays } from "../../../hooks/calendar/useCalendarDays";
import { useCalendarMonthAndYear } from "../../../hooks/calendar/useCalendarMonthAndYear";

export const DatePicker: FC = () => {
  const [currentInputValue, setCurrentInputValue] = useState<string>("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState<number | undefined>(undefined);
  const [calendarShow, setCalendarShow] = useState<boolean>(false);

  const cycleDuration = 30 * 24 * 60 * 60 * 1000;
  const week = useCalendarWeeks(
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const daysArray = useCalendarDays(
    week.currentDayIndex,
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const dateLabel = useCalendarMonthAndYear(currentDate);
  const calendar = {
    isShown: calendarShow,
    top: {
      dateLabel,
      onClickRight: () => handleChangeDate(currentDate, "right"),
      onClickLeft: () => handleChangeDate(currentDate, "left"),
    },
    week: week.weekArray,
    days: {
      daysArray,
      currentDay: currentDay,
      onClickDay: (e: React.MouseEvent<Element, MouseEvent>) => {
        const day = e.currentTarget.textContent;
        handleClickDay(day);
      },
    },
  };

  const getCalendarDate = (dateString: string) => {
    const dateArray = dateString.split(".");

    const date = new Date(
      Number(dateArray[2]),
      Number(dateArray[1]) - 1,
      Number(dateArray[0]),
    );

    if (date.toString() !== "Invalid Date") {
      setCurrentDate(date);
      setCurrentDay(date.getDate());
    }
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const dateValue = input.value;

    setCurrentInputValue(dateValue);
    getCalendarDate(dateValue);
  };

  const handleClickDay = (day: string) => {
    const dd = day.padStart(2, "0");
    const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
    const yyyy = String(currentDate.getFullYear());

    setCurrentInputValue(`${dd}.${mm}.${yyyy}`);
    setCurrentDay(+day === currentDay ? undefined : +day);
  };

  const handleChangeDate = (date: Date, direction: "right" | "left") => {
    const newDateMs =
      direction === "left" ? +date - cycleDuration : +date + cycleDuration;
    const newDate = new Date(newDateMs);

    setCurrentDate(newDate);
    setCurrentDay(undefined);
    setCurrentInputValue("");
  };

  const handleClickInput = () => {
    setCalendarShow(!calendarShow);
  };

  return (
    <>
      <BadgeTitleUI
        title={{
          text: "Дата и время проведения",
        }}
      />
      <DatePickerUI
        currentInputValue={currentInputValue}
        onChangeInputValue={handleChangeInputValue}
        onClickInput={handleClickInput}
        calendar={calendar}
      />
    </>
  );
};
