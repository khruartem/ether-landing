import { forwardRef } from "react";

import type { TAdvantagesImageUIProps } from "./types";

import styles from "./advantages-image.module.css";

export const AdvantagesImageUI = forwardRef<
  HTMLImageElement,
  TAdvantagesImageUIProps
>(({ src, transform }, ref) => {
  return (
    <img
      src={src}
      alt="Изображение секции Подробности и возможности"
      className={styles.advantages__image}
      style={transform}
      ref={ref}
    />
  );
});
