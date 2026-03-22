import { forwardRef } from "react";

import { AdvantagesDescriptionUI } from "../advantages-description";
import { AdvantagesImage } from "../../advantages-image";

import type { TAdvantagesItemUIProps } from "./types";

import styles from "./advantages-item.module.css";

export const AdvantagesItemUI = forwardRef<
  HTMLLIElement,
  TAdvantagesItemUIProps
>(({ item, descriptionPosition, inView }, ref) => {
  const { images, ...description } = item;

  return (
    <li className={styles.advantages__item} ref={ref}>
      {descriptionPosition === "left" && (
        <AdvantagesDescriptionUI
          {...description}
          position={descriptionPosition}
        />
      )}
      <div className={styles.advantages__images}>
        {images.map((image) => (
          <AdvantagesImage image={image} inView={inView} />
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
});
