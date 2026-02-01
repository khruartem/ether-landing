import type { FC } from "react";

import { TextUI } from "../ui/text";

import { Colors } from "../../utils/colors";
import type { TTypography } from "../../utils/types";

export const OTLabel: FC = () => {
  const text = "Открытая Территория";

  const typography: TTypography = {
    font: "Unbounded",
    weight: "400",
    size: "14px",
    lineHeight: "20px",
    color: Colors.Nephritis100,
  };

  return (
    <TextUI as={"span"} typography={typography}>
      {text}
    </TextUI>
  );
};
