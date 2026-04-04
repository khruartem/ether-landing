import type { FC } from "react";

import { Icon } from "../../icon";

import styles from "./gallery-add.module.css";

export const GalleryAddUI: FC = () => {
  return (
    <div className={styles["gallery-add"]}>
      <Icon
        name="plus"
        width={44}
        height={44}
        className={styles["gallery-add__icon"]}
      />
    </div>
  );
};
