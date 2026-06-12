import type { CSSProperties } from "react";
import type { Colors } from "../../utils/colors";

export type TIconProps = {
  name: string;
  width?: number | string;
  height?: number | string;
  color?: Colors;
  className?: string;
  style?: CSSProperties;
  title?: string;
};
