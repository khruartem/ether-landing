import type { ElementType } from "react";
import type { TTypography } from "../../../utils/types";

export type TTitleUIProps = {
  as?: ElementType<"h1" | "h2" | "h3">;
  text: string;
  typography: TTypography;
  emphasized?: string;
  className?: string;
};
