import type { FC } from "react";

import type { TAdvantagesImageUIProps } from "./types";

import styles from "./advantages-image.module.css";

export const AdvantagesImageUI: FC<TAdvantagesImageUIProps> = ({ images }) => {
  return (
    <div className={styles.advantages__images}>
      {images.map((image) => (
        <img src={image} alt="Изображение секции Подробности и возможности" />
      ))}
    </div>
  );
};
