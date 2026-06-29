import type { CSSProperties } from "react";
import type { TDescriptionPosition } from "../../../utils/types";
import { useMedia } from "../../../hooks/useMedia";

export const useStyle = (descriptionPosition: TDescriptionPosition) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();
  const isLargeResolution = isLarge || isDesktop || isLaptop;
  const isSmallResolution = isTablet || isMobile;

  const flexDirection = isSmallResolution
    ? "column-reverse"
    : descriptionPosition === "left"
      ? "row"
      : "row-reverse";
  const flexShrink = isLargeResolution ? 0 : "unset";

  return {
    flexDirection,
    "--flex-shrink": flexShrink,
  } as CSSProperties;
};
