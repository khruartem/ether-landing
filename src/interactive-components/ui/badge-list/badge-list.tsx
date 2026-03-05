import type { FC } from "react";

import { BadgeClueUI } from "../../../components/ui/badge-clue";
import { BadgeListItemUI } from "../badge-list-item";
import { AddBadgeUI } from "../../../components/ui/badge-add";

import type { TBadgeListUIProps } from "./types";

import styles from "./badge-list.module.css";

export const BadgeListUI: FC<TBadgeListUIProps> = ({
  clue,
  badges,
  onBadgeClick,
  addButton,
}) => {
  return (
    <div className={styles.container}>
      <BadgeClueUI text={clue} />
      <ul className={styles["badge-list"]}>
        {badges.map((badge, index) => (
          <BadgeListItemUI
            key={index}
            badge={badge}
            onClick={() => onBadgeClick(index)}
          />
        ))}
        {addButton && <AddBadgeUI />}
      </ul>
    </div>
  );
};
