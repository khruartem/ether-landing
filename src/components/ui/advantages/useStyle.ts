import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlockStart: {
    large: 140,
    desktop: 100,
    laptop: 100,
    tablet: 100,
    mobile: 80,
  },
  paddingBlockEnd: {
    large: 140,
    desktop: 100,
    laptop: 100,
    tablet: 20,
    mobile: 20,
  },
  paddingInline: {
    large: 156,
    desktop: 107,
    laptop: 42,
    tablet: 0,
    mobile: 0,
  },
  gap: {
    large: 120,
    desktop: 80,
    laptop: 80,
    tablet: 80,
    mobile: 80,
  },
});
