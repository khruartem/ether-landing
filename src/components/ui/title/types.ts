import type { ElementType } from "react";
import type { TTypography } from "../../../utils/typography";
import type { Colors } from "../../../utils/colors";

export type TTitleUIProps = {
  as?: ElementType;
  text: string;
  typography: TTypography;
  color: Colors;
  emphasized?: string;
  className?: string;
};
