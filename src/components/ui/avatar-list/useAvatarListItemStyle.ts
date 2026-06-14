import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useAvatarListItemStyle = createUseStyleHook({
  minWidth: {
    large: 24,
    desktop: 17,
    laptop: 19,
    tablet: 14,
    mobile: 12,
  },
  height: {
    large: 24,
    desktop: 17,
    laptop: 20,
    tablet: 14,
    mobile: 12,
  },
});
