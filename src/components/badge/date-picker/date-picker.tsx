import { useState, type ChangeEvent, type FC } from "react";
import { InputUI } from "../../ui/badge/input";
import { CalendarUI } from "../../ui/badge/calendar/calendar copy";
import type { TWeek } from "../../../utils/types";
import { Week } from "../../../utils/week";
import { Months } from "../../../utils/months";

export const DatePicker: FC = () => {
  const [currentInputValue, setCurrentInputValue] = useState<string>("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState<number | undefined>(undefined);
  const [calendarShow, setCalendarShow] = useState<boolean>(false);
  const cycleDuration = 30 * 24 * 60 * 60 * 1000;

  const getDate = (dateString: string) => {
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

  const getMonthAndYear = (date: Date) => {
    const month = Months[date.getMonth() as keyof typeof Months];
    const year = date.getFullYear();

    return `${month}, ${year}`;
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const dateValue = input.value;

    setCurrentInputValue(dateValue);
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

  const handleInputClick = () => {
    setCalendarShow(!calendarShow);
  };

  const week = getWeek(currentDate.getMonth(), currentDate.getFullYear());
  const daysArray = getDays(
    week.currentDayIndex,
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const dateLabel = getMonthAndYear(currentDate);

  return (
    <>
      <InputUI
        withMask
        id="date-picker"
        name="date-picker"
        type="text"
        placeholder="Дата мероприятия"
        value={currentInputValue}
        mask="dd.mm.yyyy"
        replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
        showMask
        onChange={(e) => {
          handleChangeInputValue(e);
          console.log(e.target.value);
          getDate(e.target.value);
        }}
        onClick={handleInputClick}
      />
      {calendarShow && (
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
              handleClickDay(day);
            },
          }}
        />
      )}
    </>
  );
};
