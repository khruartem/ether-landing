import { useState, type FC } from "react";
import { CalendarUI } from "../../../ui/badge/calendar/calendar";
import type { TCalendarRange } from "../../../../utils/types";

export const Calendar: FC = () => {
  const [selectedRange, setSelectedRange] = useState<TCalendarRange>({
    start: null,
    end: null,
  });

  const handleClickDay = (day: number) => {
    const { start, end } = selectedRange;

    if (!start) {
      setSelectedRange({ start: day, end: null });
      return;
    }

    if (!end) {
      setSelectedRange({
        start: start <= day ? start : day,
        end: start <= day ? day : start,
      });
      return;
    }

    setSelectedRange({ start: null, end: null });
  };

  return (
    <CalendarUI
      days={days}
      weekDayIndex={weekDay}
      lastDate={lastDay}
      onClickDay={handleClickDay}
    />
  );
};
