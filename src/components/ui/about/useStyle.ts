import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlockStart: {
    large: 100,
    desktop: 80,
    laptop: 80,
    tablet: 80,
    mobile: 60,
  },
  paddingBlockEnd: {
    large: 492,
    desktop: 96,
    laptop: 160,
    tablet: 80,
    mobile: 60,
  },
  gap: {
    large: 200,
    desktop: 80,
    laptop: 80,
    tablet: 80,
    mobile: 40,
  },
});
