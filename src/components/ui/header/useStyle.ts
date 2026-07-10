import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlock: {
    large: "20px",
    desktop: "12px",
    laptop: "12px",
    tablet: "12px",
    mobile: "12px",
  },
  paddingInline: {
    large: 156,
    desktop: 107,
    laptop: 42,
    tablet: 30,
    mobile: 16,
  },
});
