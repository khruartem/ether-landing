import type { FC } from "react";

import { TextUI } from "../ui/text";

import { Colors } from "../../utils/colors";
import { Typography } from "../../utils/typography";

export const OTLabel: FC = () => {
  const text = "Открытая Территория";

  return (
    <TextUI
      as={"span"}
      typography={Typography.Title_400_14}
      color={Colors.Nephritis100}
    >
      {text}
    </TextUI>
  );
};
