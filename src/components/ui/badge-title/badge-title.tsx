import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../text";

import type { TBadgeTitleUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useTypography } from "./useTypography";

import styles from "./badge-titile.module.css";

export const BadgeTitleUI: FC<TBadgeTitleUIProps> = ({ title }) => {
  const badgeTitleTypography = useTypography();

  return (
    <TextUI
      as={"span"}
      typography={Typography[badgeTitleTypography]}
      color={Colors.Dark100}
      className={clsx(
        title?.decorated ? styles.text_decorated : styles.text_undecorated,
      )}
    >
      {title.text}
    </TextUI>
  );
};
