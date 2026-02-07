import type { FC } from "react";

import { Image, Music, Video } from "../../../icons";

import type { TGalleryIconUIProps } from "./types";

import styles from "./gallery-icon.module.css";

export const GalleryIconUI: FC<TGalleryIconUIProps> = ({ src }) => {
  switch (src) {
    case "music":
      return <Music className={styles["gallery-item__icon"]} />;
    case "video":
      return <Video className={styles["gallery-item__icon"]} />;
    case "image":
      return <Image className={styles["gallery-item__icon"]} />;
    default:
      return null;
  }
};
