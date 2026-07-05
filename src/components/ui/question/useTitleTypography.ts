import { useMedia } from "../../../hooks/useMedia";
import type { Typography } from "../../../utils/typography";

export const useTitleTypography = () => {
  const { isMobile } = useMedia();

  return `Title_500_${isMobile ? 18 : 20}` as keyof typeof Typography;
};
