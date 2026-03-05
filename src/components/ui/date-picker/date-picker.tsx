import type { FC } from "react";
import clsx from "clsx";

import { InputUI } from "../../../interactive-components/ui/input";

import styles from "./date-picker.module.css";

export const DatePickerUI: FC = () => {
  return (
    <div className={styles["date-time"]}>
      <InputUI
        withMask
        id="date-picker"
        name="date-picker"
        type="text"
        placeholder="Дата мероприятия"
        mask="dd.mm.yyyy"
        replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
        showMask
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
  );
};
