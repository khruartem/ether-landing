import type { CSSProperties } from "react";
import { useMedia } from "../../../hooks/useMedia";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useStyle = (cardsLength: number): CSSProperties => {
  const { isMobile } = useMedia();

  const columnsCount = isMobile ? 1 : 2;

  const columnWidth = usePxToVw({
    large: 384,
    desktop: 367,
    laptop: "1fr",
    tablet: "1fr",
    mobile: "1fr",
  });

  const rowsCount = isMobile ? cardsLength : Math.round(cardsLength / 2);

  const rowWidth = usePxToVw({
    large: 192,
    desktop: 172,
    laptop: 148,
    tablet: 172,
    mobile: 172,
  });

  const rowGap = isMobile ? 40 : 80;

  return {
    gridTemplateColumns: `repeat(${columnsCount}, ${columnWidth})`,
    gridTemplateRows: `repeat(${rowsCount}, ${rowWidth})`,
    rowGap,
  };
};
