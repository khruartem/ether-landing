import { usePxToVw } from "../../../hooks/usePxToVw";
import type { TDescriptionPosition } from "../../../utils/types";

export const useDescriptionStyle = (position: TDescriptionPosition) => {
  const paddingBlockStart = usePxToVw({
    large: 98,
    desktop: 55,
    laptop: 34,
    tablet: 32,
    mobile: 32,
  });
  const paddingBlockEnd = usePxToVw({
    large: 98,
    desktop: 55,
    laptop: 34,
    tablet: 80,
    mobile: 80,
  });
  const paddingInlineStart = usePxToVw({
    large: position === "left" ? 136 : 100,
    desktop: position === "left" ? 98 : 60,
    laptop: position === "left" ? 0 : 60,
    tablet: 0,
    mobile: 0,
  });
  const paddingInlineEnd = usePxToVw({
    large: position === "left" ? 100 : 136,
    desktop: position === "left" ? 60 : 98,
    laptop: position === "left" ? 60 : 0,
    tablet: 0,
    mobile: 0,
  });
  const gap = usePxToVw({
    large: 32,
    desktop: 20,
    laptop: 12,
    tablet: 12,
    mobile: 12,
  });

  return {
    paddingBlockStart,
    paddingBlockEnd,
    paddingInlineStart,
    paddingInlineEnd,
    gap,
  };
};
