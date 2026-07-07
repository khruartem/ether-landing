import { createUseStyleHook } from "../../../utils/styleHookFactory";

export const useStyle = createUseStyleHook({
  paddingInline: {
    large: 136,
    desktop: 88,
    laptop: 40,
    tablet: 40,
    mobile: 32,
  },
  paddingBlockStart: {
    large: 80,
    desktop: 60,
    laptop: 32,
    tablet: 32,
    mobile: 20,
  },
  paddingBlockEnd: {
    large: 80,
    desktop: 60,
    laptop: 40,
    tablet: 40,
    mobile: 20,
  },
  borderRadius: {
    large: "80px",
    desktop: "80px",
    laptop: "40px",
    tablet: "40px",
    mobile: "40px",
  },
  gap: {
    large: 0,
    desktop: 0,
    laptop: 0,
    tablet: 0,
    mobile: 20,
  },
});
