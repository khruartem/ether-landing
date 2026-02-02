import type { FC } from "react";

import { TextUI } from "../../../text";

import type { TWeekDayUIProps } from "./types";

import { Colors } from "../../../../../utils/colors";
import { Typography } from "../../../../../utils/typography";

export const WeekDayUI: FC<TWeekDayUIProps> = ({ day }) => {
  return (
    <TextUI
      as={"span"}
      typography={Typography.Text_500_14}
      color={Colors.Light20}
    >
      {day}
    </TextUI>
  );
};
