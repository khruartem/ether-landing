import type { FC } from "react";

import { AddBadgeUI } from "../badge-add";
import { BadgeClueUI } from "../badge-clue";
import { BadgeListItemUI } from "../badge-list-item";

import type { TBadgeListUIProps } from "./types";

import { useContainerStyle } from "./useContainerStyle";
import { useListStyle } from "./useListStyle";

import styles from "./badge-list.module.css";

export const BadgeListUI: FC<TBadgeListUIProps> = ({ clue, badges }) => {
  const containerStyle = useContainerStyle();
  const listStyle = useListStyle();

  return (
    <div className={styles.container} style={containerStyle}>
      <BadgeClueUI text={clue} />
      <ul className={styles["badge-list"]} style={listStyle}>
        {badges.map((badge, index) => (
          <BadgeListItemUI key={index} badge={badge} />
        ))}
        <AddBadgeUI />
      </ul>
    </div>
  );
};
