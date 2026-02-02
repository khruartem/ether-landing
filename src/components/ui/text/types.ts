import type { ElementType, ReactNode } from "react";
import type { TTypography } from "../../../utils/types";
import type { Colors } from "../../../utils/colors";

export type TTextUIProps = {
  as?: ElementType;
  children: ReactNode;
  typography: TTypography;
  color: Colors;
  className?: string;
};
