import type { FC } from "react";

import { BurgerContentUI } from "../ui/burger-content";

import type { TBurgerContentProps } from "./types";

import { useNavigationContext } from "../navigation/navigation-context";

export const BurgerContent: FC<TBurgerContentProps> = ({ children }) => {
  const { opened } = useNavigationContext();

  return <BurgerContentUI opened={opened} children={children} />;
};
