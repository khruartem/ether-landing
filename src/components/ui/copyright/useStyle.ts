import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  flexDirection: {
    large: "row",
    desktop: "row",
    laptop: "row",
    tablet: "row",
    mobile: "column",
  },
});
