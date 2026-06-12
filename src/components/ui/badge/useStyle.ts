import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlockStart: {
    large: 24,
    desktop: 17.19,
    laptop: 18.73,
    tablet: 14.1,
    mobile: 11.56,
  },
  paddingInlineStart: {
    large: 12,
    desktop: 8.6,
    laptop: 9.4,
    tablet: 7,
    mobile: 5.8,
  },
  paddingBlockEnd: {
    large: 12,
    desktop: 8.6,
    laptop: 9.4,
    tablet: 7,
    mobile: 5.8,
  },
  paddingInlineEnd: {
    large: 24,
    desktop: 17.19,
    laptop: 18.73,
    tablet: 14.1,
    mobile: 11.56,
  },
});
