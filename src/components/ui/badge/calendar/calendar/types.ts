export type TCalendarUIProps = {
  days: null[];
  weekDayIndex: number;
  lastDate: number;
  onClickDay: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    styles: CSSModuleClasses,
  ) => void;
};
