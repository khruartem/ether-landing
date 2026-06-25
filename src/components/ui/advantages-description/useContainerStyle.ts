import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useContainerStyle = createUseStyleHook({
  gap: {
    large: 12,
    desktop: 8,
    laptop: 4,
    tablet: 4,
    mobile: 4,
  },
  paddingBlockEnd: {
    large: 52,
    desktop: 40,
    laptop: 32,
  },
});
