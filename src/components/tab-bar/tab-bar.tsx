import { type FC } from "react";

import { TabBarUI } from "../ui/tab-bar";

import type { TTab } from "../../utils/types";

import taskSVG from "../../../assets/icons/task.svg";
import scheduleSVG from "../../../assets/icons/schedule.svg";

export const TabBar: FC = () => {
  const tabs: TTab[] = [
    {
      icon: taskSVG,
      text: "Задачи",
    },
    {
      icon: scheduleSVG,
      text: "События",
    },
  ];

  return <TabBarUI tabs={tabs} current={tabs[0]} />;
};
