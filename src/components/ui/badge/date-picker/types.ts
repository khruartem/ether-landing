import type { ChangeEvent } from "react";
import type { Week } from "../../../../utils/week";
import type { TCalendarDays, TCalendarTop } from "../../../../utils/types";

export type TDatePickerUIProps = {
  currentInputValue: string;
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickInput: () => void;
  calendar: {
    isShown: boolean;
    top?: TCalendarTop;
    week: Week[];
    days: TCalendarDays;
  };
};
