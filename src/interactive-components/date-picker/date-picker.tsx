import { type FC } from "react";

import { BadgeTitleUI } from "../../components/ui/badge-title";
import { DatePickerUI } from "../../components/ui/date-picker";

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
