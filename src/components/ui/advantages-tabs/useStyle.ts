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
    tablet: "hidden",
    mobile: "hidden",
  },
  gap: {
    tablet: 10.5,
    mobile: 10.5,
  },
});
