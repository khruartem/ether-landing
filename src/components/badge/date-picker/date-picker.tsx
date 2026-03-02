import { type FC } from "react";

import { BadgeTitleUI } from "../../ui/badge/badge-title";
import { DatePickerUI } from "../../ui/badge/date-picker";

export const DatePicker: FC = () => {
  return (
    <>
      <BadgeTitleUI
        title={{
          text: "Дата и время проведения",
        }}
      />
      <DatePickerUI />
    </>
  );
};
