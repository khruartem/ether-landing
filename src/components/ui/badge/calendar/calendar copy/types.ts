import type { Week } from "../../../../../utils/week";

export type TCalendarUIProps = {
  top?: {
    dateLabel: string;
    onClickRight: () => void;
    onClickLeft: () => void;
  };
  week: Week[];
  days: {
    daysArray: number[];
    onClickDay: (
      e: React.MouseEvent<HTMLLIElement, MouseEvent>,
      styles: CSSModuleClasses,
    ) => void;
  };
};
