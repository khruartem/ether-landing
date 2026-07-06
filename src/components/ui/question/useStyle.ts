import type { CSSProperties } from "react";
// import { createUseStyleHook } from "../../../utils/styleHookFactory";
import { useMedia } from "../../../hooks/useMedia";

// export const useQuestionStyle = createUseStyleHook({
//   padding: {
//     large: "36px 44px",
//     desktop: "36px 44px",
//     laptop: "36px 44px",
//     tablet: "36px 44px",
//     mobile: "16px 20px",
//   },
// }, (isOpened: boolean) => {
//   return isOpened ? {gap: 12} : undefined as CSSProperties
// });

export const useStyle = (isOpened: boolean): CSSProperties => {
  const { isMobile } = useMedia();

  const gap = isOpened ? 12 : 0;
  const padding = isMobile ? "16px 20px" : "36px 44px";

  return { gap, padding } as CSSProperties;
};
