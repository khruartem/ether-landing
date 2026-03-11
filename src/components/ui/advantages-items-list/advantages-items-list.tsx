import type { FC } from "react";

import { AdvantagesItemUI } from "../advantages-item";

import type { TAdvantagesItemsListUIProps } from "./types";

import styles from "./advantages-items-list.module.css";

export const AdvantagesItemsListUI: FC<TAdvantagesItemsListUIProps> = ({
  items,
}) => {
  return (
    <ul className={styles.advantages__list}>
      {items.map((item, index) => (
        <AdvantagesItemUI
          key={index}
          item={item}
          descriptionPosition={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </ul>
  );
};
