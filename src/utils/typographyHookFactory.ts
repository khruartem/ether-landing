import clsx from "clsx";
import { useMedia } from "../hooks/useMedia";
import type { Typography } from "./typography";
import type { TBreakpointValues } from "../hooks/usePxToVw";

type TTypographyType = "Title" | "Text";
type TFontWeight = 400 | 500;
type TFontSize = Required<TBreakpointValues>;

export const createUseTypography = (
  typographyType: TTypographyType,
  fontWeight: TFontWeight,
  fontSizes: TFontSize,
) => {
  return (): keyof typeof Typography => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

    const fontSize = clsx(
      isLarge && fontSizes.large,
      isDesktop && fontSizes.desktop,
      isLaptop && fontSizes.laptop,
      isTablet && fontSizes.tablet,
      isMobile && fontSizes.mobile,
    );

    const typography =
      `${typographyType}_${fontWeight}_${fontSize}` as keyof typeof Typography;

    return typography;
  };
};
