import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlockStart: {
    large: 72,
    laptop: 52,
    tablet: 28,
    mobile: 20,
  },
  paddingBlockEnd: {
    large: 80,
    desktop: 20,
    laptop: 56,
    tablet: 32,
    mobile: 40,
  },
});
