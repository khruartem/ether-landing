import clsx from "clsx";
import { useMedia } from "../../hooks/useMedia";

export const useOffset = (): number => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const offset = +clsx(
    isLarge && 240,
    isDesktop && 230,
    isLaptop && 240,
    isTablet && 150,
    isMobile && 150,
  );

  return offset;
};
