import clsx from "clsx";
import { useMedia } from "./useMedia";

export type TBreakpointValues = {
  large?: number | string;
  desktop?: number | string;
  laptop?: number | string;
  tablet?: number | string;
  mobile?: number | string;
};

const useConvert = (px?: number | string) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  if (px && typeof px === "number") {
    const pxToVw = (px: number, viewport: number) => {
      return ((px / viewport) * 100);
    };

    return (
      clsx(
        isLarge && pxToVw(px, 1920),
        isDesktop && pxToVw(px, 1366),
        isLaptop && pxToVw(px, 1024),
        isTablet && pxToVw(px, 768),
        isMobile && pxToVw(px, 420),
      ) + "vw"
    );
  } else if (px && typeof px === "string") {
    return px;
  } else return undefined;
};

export const usePxToVw = (px: TBreakpointValues) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const pxLarge = useConvert(px.large);
  const pxDesktop = useConvert(px.desktop);
  const pxLaptop = useConvert(px.laptop);
  const pxTablet = useConvert(px.tablet);
  const pxMobile = useConvert(px.mobile);

  return clsx(
    isLarge && pxLarge,
    isDesktop && pxDesktop,
    isLaptop && pxLaptop,
    isTablet && pxTablet,
    isMobile && pxMobile,
  );
};
