import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../../../components/ui/text";

import type { TBadgeListItemUIProps } from "./types";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import styles from "./badge-list-item.module.css";

export const BadgeListItemUI: FC<TBadgeListItemUIProps> = ({
  badge,
  onClick,
}) => {
  return (
    <li
      className={clsx(
        styles["badge-list__item"],
        badge.active && styles["badge-list__item_active"],
      )}
      onClick={onClick}
    >
      <TextUI
        as={"span"}
        typography={Typography.Title_400_14}
        color={badge.active ? Colors.Light100 : Colors.Nephritis100}
        className={styles.text_budge}
      >
        {badge.text}
      </TextUI>
    </li>
  );
};
