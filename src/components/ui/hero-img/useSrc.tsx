import clsx from "clsx";

import srcLarge from "../../../assets/hero_large.png";
import srcDesktop from "../../../assets/hero_desktop.png";
import srcLaptop from "../../../assets/hero_laptop.png";
import srcTablet from "../../../assets/hero_tablet.png";
import srcMobile from "../../../assets/hero_mobile.png";

import { useMedia } from "../../../hooks/useMedia";

export const useSrc = (): string => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  return clsx(
    isLarge && srcLarge,
    isDesktop && srcDesktop,
    isLaptop && srcLaptop,
    isTablet && srcTablet,
    isMobile && srcMobile,
  );
};
