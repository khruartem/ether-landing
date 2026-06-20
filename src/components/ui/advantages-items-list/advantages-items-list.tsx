import type { FC } from "react";

import { AdvantagesGroup } from "../../advantages-group";
import { AdvantagesItem } from "../../advantages-item";

import type { TAdvantagesItemsListUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./advantages-items-list.module.css";

export const AdvantagesItemsListUI: FC<TAdvantagesItemsListUIProps> = ({
  groups,
}) => {
  const groupsStyle = useStyle();

  return (
    <div className={styles.advantages__groups} style={groupsStyle}>
      {groups.map((group, groupIndex) => (
        <AdvantagesGroup key={groupIndex} group={group}>
          {group.items.map((item, index) => (
            <AdvantagesItem
              key={index}
              item={item}
              descriptionPosition={
                groupIndex % 2 === 0
                  ? index % 2 === 0
                    ? "left"
                    : "right"
                  : index % 2 === 0
                    ? "right"
                    : "left"
              }
            />
          ))}
        </AdvantagesGroup>
      ))}
    </div>
  );
};
