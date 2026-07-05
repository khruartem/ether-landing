import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlock: {
    large: 100,
    desktop: 80,
    laptop: 80,
    tablet: 60,
    mobile: 60,
  },
});
