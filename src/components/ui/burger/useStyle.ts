import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingInline: {
    tablet: 30,
    mobile: 16,
  },
  top: {
    large: "100px",
    desktop: "84px",
    laptop: "84px",
    tablet: "84px",
    mobile: "84px",
  },
});
