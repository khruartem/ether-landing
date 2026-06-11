import clsx from "clsx";
import { useMedia } from "../../../hooks/useMedia";
import type { Typography } from "../../../utils/typography";

export const useTypography = (): keyof typeof Typography => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const fontSize = clsx(
    isLarge && 14,
    isDesktop && 10,
    isLaptop && 11,
    isTablet && 8,
    isMobile && 7,
  );

  const typography = `Title_500_${fontSize}` as keyof typeof Typography;

  return typography;
};
