import type { FC } from "react";
import clsx from "clsx";

import type { TBadgeListItemUIProps } from "./types";

import styles from "./badge-list-item.module.css";
import { TextUI } from "../../text";
import { Colors } from "../../../../utils/colors";

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
        text={badge.text}
        typography={{
          font: "Unbounded",
          weight: "400",
          size: "14px",
          lineHeight: "20px",
          color: badge.active ? Colors.Light100 : Colors.Nephritis100,
        }}
        className={styles.text_budge}
      />
    </li>
  );
};
