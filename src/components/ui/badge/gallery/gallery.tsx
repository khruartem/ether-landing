import type { FC } from "react";

import { GalleryItemUI } from "../gallery-item";

import type { TGalleryUIProps } from "./types";

import styles from "./gallery.module.css";

export const GalleryUI: FC<TGalleryUIProps> = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <GalleryItemUI item={item} />
          </li>
        );
      })}
    </ul>
  );
};
