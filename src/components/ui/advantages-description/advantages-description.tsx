import type { FC } from "react";

import { TextUI } from "../text";

import type { TAdvantagesDescriptionUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useTitleTypography } from "./useTitleTypography";
import { useTextTypography } from "./useTextTypography";
import { useDescriptionStyle } from "./useDescriptionStyle";
import { useContainerStyle } from "./useContainerStyle";

import styles from "./advantages-description.module.css";

export const AdvantagesDescriptionUI: FC<TAdvantagesDescriptionUIProps> = ({
  type,
  title,
  text,
  position,
}) => {
  const titleTypography = useTitleTypography();
  const textTypography = useTextTypography();
  const descriptionStyle = useDescriptionStyle(position);
  const containerStyle = useContainerStyle();

  return (
    <div
      className={styles.advantages__description}
      style={descriptionStyle}
    >
      <TextUI typography={Typography.Text_400_14} color={Colors.Nephritis100}>
        {type}
      </TextUI>
      <div className={styles.container} style={containerStyle}>
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
