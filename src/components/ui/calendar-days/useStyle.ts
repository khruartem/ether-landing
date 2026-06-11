import type { CSSProperties } from "react";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useStyle = (): CSSProperties => {
  const width = usePxToVw({
    large: 36,
    desktop: 26,
    laptop: 28,
    tablet: 21,
    mobile: 18,
  });

  const columnGap = usePxToVw({
    large: 16,
    desktop: 12,
    laptop: 12.5,
    tablet: 9.4,
    mobile: 8,
  });

  return {
    gridTemplateColumns: `repeat(7, ${width})`,
    gridTemplateRows: `repeat(6, ${width})`,
    columnGap,
  };
};
