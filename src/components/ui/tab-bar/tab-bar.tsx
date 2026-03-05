import type { FC } from "react";

import { TabUI } from "../tab";

import type { TTabBarUIProps } from "./types";

import styles from "./tab-bar.module.css";

export const TabBarUI: FC<TTabBarUIProps> = ({ tabs, current }) => {
  return (
    <ul className={styles["tab-bar"]}>
      {tabs.map((tab, index) => {
        return (
          <li key={index}>
            <TabUI tab={tab} current={current.text === tab.text} />
          </li>
        );
      })}
    </ul>
  );
};
