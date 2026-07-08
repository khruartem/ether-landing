import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlock: {
    large: "20px",
    desktop: 10.5,
    laptop: 10.5,
    tablet: 10.5,
    mobile: 10.5,
  },
  paddingInline: {
    large: 156,
    desktop: 107,
    laptop: 42,
    tablet: 30,
    mobile: 16,
  },
});
