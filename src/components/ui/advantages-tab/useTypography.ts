import { createUseTypography } from "../../../utils/typographyHookFactory";

export const useTypography = createUseTypography("Title", 500, {
  large: 28,
  desktop: 20,
  laptop: 18,
  tablet: 18,
  mobile: 18,
});
