import type { FC } from "react";

import { AdvantagesImage } from "../../advantages-image";

import type { TAdvantagesImagesUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./advantages-images.module.css";

export const AdvantagesImagesUI: FC<TAdvantagesImagesUIProps> = ({
  images,
}) => {
  const imagesStyle = useStyle();

  return (
    <div className={styles.advantages__images} style={imagesStyle}>
      {images.map((image) => (
        <AdvantagesImage image={image} />
      ))}
    </div>
  );
};
