import type { FC } from "react";

import { AddBadgeUI } from "../badge-add";
import { BadgeClueUI } from "../badge-clue";
import { BadgeListItemUI } from "../badge-list-item";

import type { TBadgeListUIProps } from "./types";

import styles from "./badge-list.module.css";

export const BadgeListUI: FC<TBadgeListUIProps> = ({ clue, badges }) => {
  return (
    <div className={styles.container}>
      <BadgeClueUI text={clue} />
      <ul className={styles["badge-list"]}>
        {badges.map((badge, index) => (
          <BadgeListItemUI key={index} badge={badge} />
        ))}
        <AddBadgeUI />
      </ul>
    </div>
  );
};
