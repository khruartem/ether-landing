import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useDescriptionStyle = createUseStyleHook({
  gap: {
    large: 12,
    desktop: 8,
    laptop: 4,
    tablet: 4,
    mobile: 4,
  },
  paddingBlockEnd: {
    large: 40,
    desktop: 32,
  },
});
