import type { FC } from "react";

import { GalleryPlus } from "../../icons";

import styles from "./gallery-add.module.css";

export const GalleryAddUI: FC = () => {
  return (
    <div className={styles["gallery-add"]}>
      <GalleryPlus className={styles["gallery-add__plus"]} />
    </div>
  );
};
