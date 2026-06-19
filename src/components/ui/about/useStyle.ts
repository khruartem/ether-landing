import clsx from "clsx";
import { useMedia } from "../../../hooks/useMedia";
import { createUseStyleHook } from "../../../utils/styleHookFactory";

import iphoneMockupLarge from "../../../assets/iphone_mockup_large.png";
import iphoneMockupMiddle from "../../../assets/iphone_mockup_middle.png";
import iphoneMockupSmall from "../../../assets/iphone_mockup_small.png";

export const useStyle = createUseStyleHook(
  {
    paddingBlockStart: {
      large: 100,
      desktop: 80,
      laptop: 80,
      tablet: 80,
      mobile: 60,
    },
    paddingBlockEnd: {
      large: 492,
      desktop: 244,
      laptop: 160,
      tablet: 80,
      mobile: 60,
    },
    gap: {
      large: 200,
      desktop: 80,
      laptop: 880,
      tablet: 880,
      mobile: 668,
    },
  },
  () => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useMedia();

    const iphoneMockup = clsx(
      isLarge && iphoneMockupLarge,
      isDesktop && iphoneMockupMiddle,
      isLaptop && iphoneMockupMiddle,
      isTablet && iphoneMockupMiddle,
      isMobile && iphoneMockupSmall,
    );
    const backgroundPositionX = "50%";
    const backgroundPositionY = clsx(
      isLarge && "101%",
      isDesktop && "85%",
      isLaptop && "30%",
      isTablet && "28%",
      isMobile && "15%",
    );
    const backgroundSize = clsx(
      isLarge && "contain",
      isDesktop && "145.8%",
      isLaptop && "165%",
      isTablet && "220%",
      isMobile && "184%",
    );

    return {
      backgroundPositionX,
      backgroundPositionY,
      backgroundImage: `url(${iphoneMockup})`,
      backgroundSize,
    };
  },
);
