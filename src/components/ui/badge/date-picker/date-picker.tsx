import type { FC } from "react";

import { InputUI } from "../input";
import { BadgeUI } from "../badge";
import { CalendarUI } from "../calendar/calendar";

import type { TDatePickerUIProps } from "./types";

import styles from "./date-picker.module.css";
import clsx from "clsx";

export const DatePickerUI: FC<TDatePickerUIProps> = ({
  currentInputValue,
  onChangeInputValue,
  onClickInput,
  calendar,
}) => {
  const { isShown, ...calendarProps } = calendar;

  return (
    <>
      <div className={styles["date-time"]}>
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
          onChange={onChangeInputValue}
          onClick={onClickInput}
          className={clsx(
            styles["date-time__input"],
            styles["date-time__input_date"],
          )}
        />
        <InputUI
          withMask
          id="date-picker"
          name="date-picker"
          type="text"
          placeholder="Время мероприятия"
          mask="hh:mm"
          replacement={{ h: /\d/, m: /\d/ }}
          showMask
          className={styles["date-time__input"]}
        />
      </div>
      {isShown && (
        <BadgeUI className={styles["hero__block_date-picker"]}>
          <CalendarUI {...calendarProps} />
        </BadgeUI>
      )}
    </>
  );
};
