import { createUseTypography } from "../../../utils/typographyHookFactory";

export const useTypography = createUseTypography("Title", 600, {
  large: 68,
  desktop: 60,
  laptop: 52,
  tablet: 40,
  mobile: 20,
});
