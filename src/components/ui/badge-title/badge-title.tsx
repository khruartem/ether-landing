import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../../text";

import type { TBadgeTitleUIProps } from "./types";

import { Colors } from "../../../../utils/colors";
import { Typography } from "../../../../utils/typography";

import styles from "./badge-titile.module.css";

export const BadgeTitleUI: FC<TBadgeTitleUIProps> = ({ title }) => {
  return (
    <TextUI
      typography={Typography.Title_500_14}
      color={Colors.Dark100}
      className={clsx(
        title?.decorated ? styles.text_decorated : styles.text_undecorated,
      )}
    >
      {title.text}
    </TextUI>
  );
};
