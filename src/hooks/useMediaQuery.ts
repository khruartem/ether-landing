export const useMediaQuery = () => {
  const isLarge = window.matchMedia("(min-width: 1681px)").matches;
  const isDesktop = window.matchMedia(
    "(min-width: 1201px) and (max-width: 1680.9px)",
  ).matches;
  const isLaptop = window.matchMedia(
    "(min-width: 1021px) and (max-width: 1200.9px)",
  ).matches;
  const isTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1020.9px)",
  ).matches;
  const isMobile = window.matchMedia("(max-width: 767.9px)").matches;

  return {
    isLarge,
    isDesktop,
    isLaptop,
    isTablet,
    isMobile,
  };
};
