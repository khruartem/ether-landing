import type { FC } from "react";

import { AdvantagesItem } from "../../advantages-item";

import type { TAdvantagesItemsListUIProps } from "./types";

import styles from "./advantages-items-list.module.css";

export const AdvantagesItemsListUI: FC<TAdvantagesItemsListUIProps> = ({
  items,
}) => {
  return (
    <ul className={styles.advantages__list}>
      {items.map((item, index) => (
        <AdvantagesItem
          key={index}
          item={item}
          descriptionPosition={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </ul>
  );
};
