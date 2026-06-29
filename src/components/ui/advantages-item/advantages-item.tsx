import { forwardRef } from "react";

import { AdvantagesDescriptionUI } from "../advantages-description";
import { AdvantagesImagesUI } from "../advantages-images";

import type { TAdvantagesItemUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./advantages-item.module.css";

export const AdvantagesItemUI = forwardRef<
  HTMLLIElement,
  TAdvantagesItemUIProps
>(({ item, descriptionPosition }, ref) => {
  const itemStyle = useStyle(descriptionPosition);

  const { images, ...description } = item;

  return (
    <li className={styles.advantages__item} style={itemStyle} ref={ref}>
      <AdvantagesDescriptionUI
        {...description}
        position={descriptionPosition}
      />
      <AdvantagesImagesUI images={images} />
    </li>
  );
});
