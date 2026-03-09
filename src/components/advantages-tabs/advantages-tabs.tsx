import type { FC } from "react";

import { AdvantagesTabsUI } from "../ui/advantages-tabs";

import { useAdvantagesContext } from "../../hooks/useAdvantagesContext";

export const AdvantagesTabs: FC = () => {
  const { tabs, currentTab, handleTabChange } = useAdvantagesContext();

  return (
    <AdvantagesTabsUI
      tabs={tabs}
      currentTab={currentTab}
      onTabChange={handleTabChange}
    />
  );
};
