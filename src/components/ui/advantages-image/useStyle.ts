import clsx from "clsx";
import type { CSSProperties } from "react";

import type { TAdvantagesStyleConfig } from "../../../utils/types";

import { useMedia } from "../../../hooks/useMedia";
import type { TBreakpointValues } from "../../../hooks/usePxToVw";

export const useStyle = (config: TAdvantagesStyleConfig): CSSProperties => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const result: Record<string, unknown> = {};

  Object.entries(config).forEach(([property, value]) => {
    result[property] = isBreakpointValues(value)
      ? clsx(
          isLarge && value.large,
          isDesktop && value.desktop,
          isLaptop && value.laptop,
          isTablet && value.tablet,
          isMobile && value.mobile,
        )
      : value;
  });

  return { ...result } as CSSProperties;
};

const isBreakpointValues = (value: unknown): value is TBreakpointValues => {
  if (!value || typeof value !== "object") return false;

  const validKeys = ["large", "desktop", "laptop", "tablet", "mobile"];

  // Проверяем, что КАЖДЫЙ ключ присутствующий в объекте, является валидным брейкпоинтом
  return Object.keys(value).every((key) => validKeys.includes(key));
};
