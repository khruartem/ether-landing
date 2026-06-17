import clsx from "clsx";
import { useMedia } from "../../../hooks/useMedia";
import { createUseStyleHook } from "../../../utils/styleHookFactory";

import iphoneMockupLarge from "../../../assets/iphone_mockup_large.png";
import iphoneMockupDesktop from "../../../assets/iphone_mockup_middle.png";

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
      desktop: 96,
      laptop: 160,
      tablet: 80,
      mobile: 60,
    },
    gap: {
      large: 200,
      desktop: 80,
      laptop: 80,
      tablet: 80,
      mobile: 40,
    },
  },
  () => {
    const { isLarge, isDesktop } = useMedia();

    const iphoneMockup = clsx(
      isLarge && iphoneMockupLarge,
      isDesktop && iphoneMockupDesktop,
    );
    const backgroundPosition = clsx(
      isLarge && "50% 101%",
      isDesktop && "50% 101%",
    );

    return { backgroundPosition, backgroundImage: `url(${iphoneMockup})` };
  },
);
