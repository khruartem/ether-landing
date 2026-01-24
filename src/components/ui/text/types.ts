import type { ElementType } from "react";
import type { TTypography } from "../../../utils/types";

export type TTextUIProps = {
  as?: ElementType;
  text: string;
  typography: TTypography;
  emphasized?: string;
  className?: string;
};
