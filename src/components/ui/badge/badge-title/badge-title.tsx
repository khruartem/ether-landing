import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../../text";

import type { TBadgeTitleUIProps } from "./types";

import { Colors } from "../../../../utils/colors";

import styles from "./badge-titile.module.css";

export const BadgeTitleUI: FC<TBadgeTitleUIProps> = ({ title }) => {
  return (
    <TextUI
      text={title.text}
      typography={{
        font: "Unbounded",
        weight: "500",
        size: "14px",
        lineHeight: "20px",
        color: Colors.Dark100,
      }}
      className={clsx(title?.decorated && styles.text_decorated)}
    />
  );
};
