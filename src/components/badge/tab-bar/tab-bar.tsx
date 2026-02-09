import { useState, type FC } from "react";

import { TabBarUI } from "../../ui/badge/tab-bar";

import type { TTab } from "../../../utils/types";

export const TabBar: FC = () => {
  const tabs: TTab[] = [
    {
      icon: "task",
      text: "Задачи",
    },
    {
      icon: "schedule",
      text: "События",
    },
  ];

  const [currentTab, setCurrentTab] = useState<TTab>(tabs[0]);

  const handleTabClick = (tab: TTab) => {
    setCurrentTab(tab);
  };

  return (
    <TabBarUI tabs={tabs} currentTab={currentTab} onTabClick={handleTabClick} />
  );
};
