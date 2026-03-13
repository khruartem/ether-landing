import type { FC } from "react";

import { AdvantagesDescriptionUI } from "../advantages-description";
import { AdvantagesImage } from "../../advantages-image";

import type { TAdvantagesItemUIProps } from "./types";

import styles from "./advantages-item.module.css";

export const AdvantagesItemUI: FC<TAdvantagesItemUIProps> = ({
  item,
  descriptionPosition,
}) => {
  const { images, ...description } = item;

  return (
    <li className={styles.advantages__item}>
      {descriptionPosition === "left" && (
        <AdvantagesDescriptionUI
          {...description}
          position={descriptionPosition}
        />
      )}
      <div className={styles.advantages__images}>
        {images.map((image) => (
          <AdvantagesImage image={image} />
        ))}
      </div>
      {descriptionPosition === "right" && (
        <AdvantagesDescriptionUI
          {...description}
          position={descriptionPosition}
        />
      )}
    </li>
  );
};
