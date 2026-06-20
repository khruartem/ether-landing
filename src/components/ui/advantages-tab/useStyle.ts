import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlock: {
    large: 32,
    desktop: 20,
    laptop: 12,
    tablet: 12,
    mobile: 12,
  },
  paddingInline: {
    large: 60,
    desktop: 40,
    laptop: 24,
    tablet: 24,
    mobile: 24,
  },
});
