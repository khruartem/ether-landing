import type { FC } from "react";

import { TextUI } from "../text";

import type { TBadgeClueUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useTypography } from "./useTypography";

export const BadgeClueUI: FC<TBadgeClueUIProps> = ({ text }) => {
  const badgeClueTypography = useTypography();

  return (
    <TextUI typography={Typography[badgeClueTypography]} color={Colors.Dark80}>
      {text}
    </TextUI>
  );
};
