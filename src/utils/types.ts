import type { Colors } from "./colors";

export type TTypography = {
  font: "Unbounded" | "Roboto";
  weight: string;
  size: string;
  lineHeight: string;
  textAlign?: string;
  color: Colors;
};

export type TNavItem = {
  label: string;
  to: string;
};
