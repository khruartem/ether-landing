import type { FC } from "react";

import { TextUI } from "../text";

import type { TBadgeClueUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

export const BadgeClueUI: FC<TBadgeClueUIProps> = ({ text }) => {
  return (
    <TextUI typography={Typography.Text_400_14} color={Colors.Dark80}>
      {text}
    </TextUI>
  );
};
