export type TCalendarDaysUIProps = {
  days: number[];
  onClickDay: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    styles: CSSModuleClasses,
  ) => void;
};
