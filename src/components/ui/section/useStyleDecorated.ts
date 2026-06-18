import { useMedia } from "../../../hooks/useMedia";

export const useStyleDecorated = () => {
  const { isTablet, isMobile } = useMedia();
  const isSmallResolution = isTablet || isMobile;

  const borderRadius = isSmallResolution ? 100 : 200;

  return {
    borderRadius,
  };
};
