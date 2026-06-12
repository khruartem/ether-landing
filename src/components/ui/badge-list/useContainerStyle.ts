import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useContainerStyle = createUseStyleHook({
  gap: {
    large: 12,
    desktop: 8.6,
    laptop: 9.4,
    tablet: 7,
    mobile: 5.8,
  },
});
