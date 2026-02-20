import type { Week } from "../../../../../utils/week";

export type TCalendarUIProps = {
  dateLabel: string;
  inputValue: string;
  currentWeekDay: { dayIndex: number; dayName: Week };
  daysArray: number[];
  voidDaysArray: null[];
  onClickDay: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    styles: CSSModuleClasses,
  ) => void;
  onClickRight: () => void;
  onClickLeft: () => void;
};
