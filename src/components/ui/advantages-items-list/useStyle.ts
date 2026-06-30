import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingInline: {
    tablet: 30,
    mobile: 30,
  },
  paddingBlockStart: {
    large: 120,
    desktop: 80,
    laptop: 80,
    tablet: 80,
    mobile: 80,
  },
});
