import { type FC } from "react";

import { AdvantagesItemsListUI } from "../ui/advantages-items-list";

import { useAdvantagesContext } from "../advantages/advantages-context";

export const AdvantagesItemsList: FC = () => {
  const { advantagesGroups } = useAdvantagesContext();

  return <AdvantagesItemsListUI groups={advantagesGroups} />;
};
