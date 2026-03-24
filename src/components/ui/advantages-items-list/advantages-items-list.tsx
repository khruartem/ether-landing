import type { FC } from "react";

import { AdvantagesItem } from "../../advantages-item";

import type { TAdvantagesItemsListUIProps } from "./types";

import styles from "./advantages-items-list.module.css";
import { AdvantagesGroup } from "../../advantages-group";

export const AdvantagesItemsListUI: FC<TAdvantagesItemsListUIProps> = ({
  groups,
}) => {
  return (
    <div className={styles.advantages__groups}>
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
