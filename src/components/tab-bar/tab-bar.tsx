import { type FC } from "react";

import { TabBarUI } from "../ui/tab-bar";

import type { TTab } from "../../utils/types";

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

  return <TabBarUI tabs={tabs} current={tabs[0]} />;
};
