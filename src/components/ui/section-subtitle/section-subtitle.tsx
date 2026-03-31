import type { FC } from "react";

import { Icon } from "../../icon";
import { TextUI } from "../text";

import type { TSectionSubtitleUIProps } from "./types";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import styles from "./section-subtitle.module.css";

export const SectionSubtitleUI: FC<TSectionSubtitleUIProps> = ({
  text,
  icon,
  backgroundColor,
}) => {
  return (
    <h3 className={styles["section-subtitle"]} style={{ backgroundColor }}>
      {/* <img src={icon} alt="Иконка для подзаголовка" /> */}
      <Icon name={icon} width={24} height={24} className={styles["section-subtitle__icon"]} />
      <TextUI
        as={"h3"}
        typography={Typography.Title_400_14}
        color={Colors.Dark100}
      >
        {text}
      </TextUI>
    </h3>
  );
};
