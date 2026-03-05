import type { FC } from "react";

import { TextUI } from "../../text";

import type { TBadgeClueUIProps } from "./types";

import { Colors } from "../../../../utils/colors";
import { Typography } from "../../../../utils/typography";

export const BadgeClueUI: FC<TBadgeClueUIProps> = ({ text }) => {
  return (
    <TextUI typography={Typography.Text_400_14} color={Colors.Dark80}>
      {text}
    </TextUI>
  );
};
