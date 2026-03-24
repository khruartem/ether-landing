import type { FC } from "react";

import { AdvantagesTabUI } from "../advantages-tab";

import type { TAdvantagesTabsUIProps } from "./types";

import styles from "./advantages-tabs.module.css";

export const AdvantagesTabsUI: FC<TAdvantagesTabsUIProps> = ({
  tabs,
  currentTab,
  onTabChange,
}) => {
  return (
    <ul className={styles.advantages__tabs}>
      {tabs.map((tab, index) => (
        <AdvantagesTabUI
          key={index}
          tab={tab}
          current={currentTab === tab}
          onChange={(e) => onTabChange(tab, e)}
        />
      ))}
    </ul>
  );
};
