import type { FC } from "react";

import { MenuUI } from "../ui/menu";

import type { TNavItem } from "../../utils/types";
import { useNavigationContext } from "../navigation/navigation-context";
import { useMedia } from "../../hooks/useMedia";

export const Menu: FC = () => {
  const {isTablet, isMobile} = useMedia();
  const isSmallResolution = isTablet || isMobile;


  const { onOpen } = useNavigationContext();
  const handleClick = isSmallResolution ? onOpen : undefined;

  const navItems: TNavItem[] = [
    { label: "О продукте", to: "#about", onClick: handleClick },
    { label: "Функционал", to: "#functional", onClick: handleClick },
    { label: "FAQ", to: "#faq", onClick: handleClick },
  ];

  return <MenuUI items={navItems} />;
};
