import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlock: {
    large: 8,
    desktop: 6,
    laptop: 6,
    tablet: 4.7,
    mobile: 4,
  },
  paddingInline: {
    large: 12,
    desktop: 8.6,
    laptop: 9.4,
    tablet: 7,
    mobile: 5.8,
  },
});
