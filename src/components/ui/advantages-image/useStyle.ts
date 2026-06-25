// import clsx from "clsx";
// import { useMedia } from "../../../hooks/useMedia";
// import type { TAdvantagesTransform } from "../../../utils/types";
// import type { CSSProperties } from "react";
// import type { TBreakpointValues } from "../../../hooks/usePxToVw";
// type TAdvantagesImageProps = {
//   transform?: TAdvantagesTransform;
//   position: TBreakpointValues;
//   maxHeight?: TBreakpointValues;
// };
// export const useStyle = (
//   advantagesImagePorps: TAdvantagesImageProps,
// ): CSSProperties => {
//   const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();
//   const { position } = advantagesImagePorps;
//   const inset = clsx(
//     isLarge && position.large,
//     isDesktop && position.desktop,
//     isLaptop && position.laptop,
//     isTablet && position.tablet,
//     isMobile && position.mobile,
//   );
//   return {
//     inset,
//   };
// };

import type { TAdvantagesTransform } from "../../../utils/types";
import type { CSSProperties } from "react";
import type { TBreakpointValues } from "../../../hooks/usePxToVw";
import { createUseStyleHook } from "../../../utils/styleHookFactory";

type TAdvantagesImageProps = {
  transform?: TAdvantagesTransform;
  position: TBreakpointValues;
  maxHeight?: TBreakpointValues;
};

export const useStyle = (
  advantagesImagePorps: TAdvantagesImageProps,
): (() => CSSProperties) => {
  const { position, maxHeight, transform } = advantagesImagePorps;

  return createUseStyleHook({
    inset: position,
    transform: transform?.transform,
    transformOrigin: transform?.transformOrigin,
    maxHeight,
  });
};
