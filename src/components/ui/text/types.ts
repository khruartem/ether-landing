import type { ElementType, ReactNode } from "react";
import type { TTypography } from "../../../utils/types";

export type TTextUIProps = {
  as?: ElementType;
  children: ReactNode;
  typography: TTypography;
  // emphasized?: string;
  className?: string;
};
