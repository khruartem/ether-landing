import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useAddBadgeStyle = createUseStyleHook({
  paddingBlock: {
    large: 8,
    desktop: 5.63,
    laptop: 6.19,
    tablet: 4.29,
    mobile: 3.53,
  },
  paddingInline: {
    large: 8,
    desktop: 5.84,
    laptop: 6.29,
    tablet: 5.12,
    mobile: 4.18,
  },
});
