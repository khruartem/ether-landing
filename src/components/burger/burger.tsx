import type { FC } from "react";

import { BurgerUI } from "../ui/burger";
import { useNavigationContext } from "../navigation/navigation-context";

export const Burger: FC = () => {
  const { opened } = useNavigationContext();

  return <BurgerUI opened={opened} />;
};
