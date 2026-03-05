import type { FC } from "react";

import { GalleryIconUI } from "../gallery-icon";
import { TextUI } from "../text";

import type { TGalleryItemUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./gallery-item.module.css";

export const GalleryItemUI: FC<TGalleryItemUIProps> = ({ item }) => {
  return (
    <div
      className={styles["gallery-item"]}
      style={{
        backgroundImage: item?.background && `url(${item.background})`,
        backgroundColor: item?.backhroundColor,
      }}
    >
      <GalleryIconUI src={item.icon} />
      {item.title && (
        <TextUI
          as={"span"}
          typography={Typography.Text_400_12}
          color={Colors.Navy}
          className={styles["gallery-item__text"]}
        >
          {item.title}
        </TextUI>
      )}
    </div>
  );
};
