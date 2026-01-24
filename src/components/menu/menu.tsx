import type { FC } from "react";

import { MenuUI } from "../ui/menu";

import type { TNavItem } from "../../utils/types";

export const Menu: FC = () => {
  const navItems: TNavItem[] = [
    { label: "О продукте", to: "product" },
    { label: "Функционал", to: "functional" },
    { label: "FAQ", to: "faq" },
  ];

  return <MenuUI items={navItems} />;
};
