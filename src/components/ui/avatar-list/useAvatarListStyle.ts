import { usePxToVw } from "../../../hooks/usePxToVw";

export const useAvatarListStyle = () => {
  const gridColumnsWidth = usePxToVw({
    large: 12,
    desktop: 9,
    laptop: 10,
    tablet: 7,
    mobile: 6,
  });
  const gridTemplateColumns = `repeat(auto-fit, ${gridColumnsWidth})`;

  return { gridTemplateColumns };
};
