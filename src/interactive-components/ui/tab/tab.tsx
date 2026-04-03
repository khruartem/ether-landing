import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../../../components/ui/text";
import { Icon } from "../../../components/icon";

import type { TTabUIProps } from "./types";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import styles from "./tab.module.css";

export const TabUI: FC<TTabUIProps> = ({ tab, current, onClick }) => {
  const currentColor = current ? Colors.Navy : Colors.Dark80;

  return (
    <div
      className={clsx(styles.tab, current && styles.tab_current)}
      onClick={onClick}
    >
      <TextUI typography={Typography.Title_400_14} color={currentColor}>
        {tab.text}
      </TextUI>
      <Icon
        name={tab.icon}
        width={20}
        height={20}
        className={clsx(styles.tab__icon, current && styles.tab__icon_current)}
      />
    </div>
  );
};
