import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../text";

import type { TAdvantagesDescriptionUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./advantages-description.module.css";
import { useTitleTypography } from "./useTitleTypography";
import { useTextTypography } from "./useTextTypography";

export const AdvantagesDescriptionUI: FC<TAdvantagesDescriptionUIProps> = ({
  type,
  title,
  text,
  position,
}) => {
  const titleTypography = useTitleTypography();
  const textTypography = useTextTypography();

  return (
    <div
      className={clsx(
        styles.advantages__description,
        position === "left" && styles.advantages__description_left,
        position === "right" && styles.advantages__description_right,
      )}
    >
      <TextUI typography={Typography.Text_400_14} color={Colors.Nephritis100}>
        {type}
      </TextUI>
      <div className={styles.container}>
        <TextUI typography={Typography[titleTypography]} color={Colors.Navy}>
          {title}
        </TextUI>
        <TextUI typography={Typography[textTypography]} color={Colors.Dark100}>
          {text}
        </TextUI>
      </div>
    </div>
  );
};
