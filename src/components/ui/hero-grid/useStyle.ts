import clsx from "clsx";
import type { CSSProperties } from "react";
import { useMedia } from "../../../hooks/useMedia";
import { usePxToVw } from "../../../hooks/usePxToVw";

export const useStyle = (): CSSProperties => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

  const columnsLarge = `${usePxToVw({ large: 384 })} ${usePxToVw({ large: 766 })} ${usePxToVw({ large: 410 })}`;
  const columnsDesktop = `${usePxToVw({ desktop: 275 })} ${usePxToVw({ desktop: 549 })} ${usePxToVw({ desktop: 294 })}`;
  const columnsLaptop = `${usePxToVw({ laptop: 300 })} ${usePxToVw({ laptop: 289 })} ${usePxToVw({ laptop: 320 })}`;
  const columnsTablet = `${usePxToVw({ tablet: 226 })} ${usePxToVw({ tablet: 218 })} ${usePxToVw({ tablet: 241 })}`;
  const columnsMobile = "1fr 1fr";

  const gridTemplateColumns = clsx(
    isLarge && columnsLarge,
    isDesktop && columnsDesktop,
    isLaptop && columnsLaptop,
    isTablet && columnsTablet,
    isMobile && columnsMobile,
  );

  const columnGap = usePxToVw({
    large: 24,
    desktop: 17.19,
    laptop: 16,
    tablet: 12,
    mobile: 12,
  });

  return {
    gridTemplateColumns,
    columnGap,
  };
};
