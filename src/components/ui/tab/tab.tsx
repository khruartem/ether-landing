import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../text";
import { TabIconUI } from "../tab-icon";

import type { TTabUIProps } from "./types";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import styles from "./tab.module.css";

export const TabUI: FC<TTabUIProps> = ({ tab, current }) => {
  const currentColor = current ? Colors.Navy : Colors.Dark80;

  return (
    <div className={clsx(styles.tab, current && styles.tab_current)}>
      <TextUI typography={Typography.Title_400_14} color={currentColor}>
        {tab.text}
      </TextUI>
      <TabIconUI icon={tab.icon} color={currentColor} />
    </div>
  );
};
