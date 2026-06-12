import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useListStyle = createUseStyleHook({
  gap: {
    large: 4,
    desktop: 3,
    laptop: 3,
    tablet: 2.3,
    mobile: 2,
  },
});
