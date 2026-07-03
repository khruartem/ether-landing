import type { FC } from "react";

import { AdvantagesTab } from "../../advantages-tab";

import type { TAdvantagesTabsUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./advantages-tabs.module.css";

export const AdvantagesTabsUI: FC<TAdvantagesTabsUIProps> = ({ tabs }) => {
  const tabsStyle = useStyle();

  return (
    <ul
      id="advantages-tabs"
      className={styles.advantages__tabs}
      style={tabsStyle}
    >
      {tabs.map((tab, index) => (
        <AdvantagesTab key={index} tab={tab} />
      ))}
    </ul>
  );
};
