import type { FC } from "react";

import { AdvantagesTabsUI } from "../ui/advantages-tabs";

import { useAdvantagesContext } from "../advantages/advantages-context";

export const AdvantagesTabs: FC = () => {
  const { tabs } = useAdvantagesContext();

  return <AdvantagesTabsUI tabs={tabs} />;
};
