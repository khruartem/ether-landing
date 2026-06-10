import type { FC } from "react";
import { createPortal } from "react-dom";

import { BurgerUI } from "../ui/burger";
import { useNavigationContext } from "../navigation/navigation-context";

export const Burger: FC = () => {
  const { opened } = useNavigationContext();

  return createPortal(<BurgerUI opened={opened} />, document.body);
};
