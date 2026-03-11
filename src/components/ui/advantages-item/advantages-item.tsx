import type { FC } from "react";

import { AdvantagesDescriptionUI } from "../advantages-description";

import type { TAdvantagesItemUIProps } from "./types";

import styles from "./advantages-item.module.css";
import { AdvantagesImageUI } from "../advantages-image";

export const AdvantagesItemUI: FC<TAdvantagesItemUIProps> = ({
  item,
  descriptionPosition,
}) => {
  const { image, ...description } = item;

  return (
    <li className={styles.advantages__item}>
      {descriptionPosition === "left" && (
        <AdvantagesDescriptionUI
          {...description}
          position={descriptionPosition}
        />
      )}
      <AdvantagesImageUI images={image} />
      {descriptionPosition === "right" && (
        <AdvantagesDescriptionUI
          {...description}
          position={descriptionPosition}
        />
      )}
    </li>
  );
};
