import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../../text";

import type { TBadgeListItemUIProps } from "./types";

import { Typography } from "../../../../utils/typography";
import { Colors } from "../../../../utils/colors";

import styles from "./badge-list-item.module.css";

export const BadgeListItemUI: FC<TBadgeListItemUIProps> = ({ badge }) => {
  const { text, active, decorated } = badge;

  return (
    <li
      className={clsx(
        styles["badge-list__item"],
        active && styles["badge-list__item_active"],
        decorated && styles["badge-list__item_decorated"],
      )}
    >
      <TextUI
        as={"span"}
        typography={Typography.Title_400_14}
        color={active ? Colors.Light100 : Colors.Nephritis100}
        className={styles.text_budge}
      >
        {text}
      </TextUI>
    </li>
  );
};
