import { createUseTypography } from "../../../utils/typographyHookFactory";

const fontSizes = { large: 14, desktop: 10, laptop: 11, tablet: 8, mobile: 7 };
export const useTypography = createUseTypography("Text", 400, fontSizes);
