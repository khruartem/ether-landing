import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingBlockStart: {
    large: 40,
    desktop: 20,
    laptop: 20,
    tablet: 20,
    mobile: 20,
  },
  paddingInlineStart: {
    tablet: 30,
    mobile: 30,
  },
  overflowX: {
    tablet: "scroll",
    mobile: "scroll",
  },
  gap: {
    tablet: 10.5,
    mobile: 10.5,
  },
  top: {
    large: "100px",
    desktop: 70,
    laptop: 75,
    tablet: 75,
    mobile: 75,
  },
});
