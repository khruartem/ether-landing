import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  gap: {
    large: 16,
    desktop: 12,
    laptop: 12.5,
    tablet: 9.4,
    mobile: 8,
  },
});
