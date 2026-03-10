import type { FC } from "react";

import { AdvantagesItemsListUI } from "../ui/advantages-items-list";

import { useAdvantagesContext } from "../../hooks/useAdvantagesContext";

export const AdvantagesItemsList: FC = () => {
  const { advantagesItems } = useAdvantagesContext();

  return <AdvantagesItemsListUI items={advantagesItems} />;
};
