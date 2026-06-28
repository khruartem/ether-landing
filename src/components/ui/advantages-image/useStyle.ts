import clsx from "clsx";
import type { CSSProperties } from "react";

import type { TStyleConfig } from "../../../utils/types";

import { useMedia } from "../../../hooks/useMedia";

export const useStyle = (config: TStyleConfig): CSSProperties => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const result: Record<string, unknown> = {};

  Object.entries(config).forEach(([property, breakpoints]) => {
    result[property] = clsx(
      isLarge && breakpoints.large,
      isDesktop && breakpoints.desktop,
      isLaptop && breakpoints.laptop,
      isTablet && breakpoints.tablet,
      isMobile && breakpoints.mobile,
    );
  });

  return { ...result } as CSSProperties;
};

// import type { TStyleConfig } from "../../../utils/types";
// import { createUseStyleHook } from "../../../utils/styleHookFactory";

// export const useStyle = (config: TStyleConfig) => {
//   return createUseStyleHook(config)();
// };
