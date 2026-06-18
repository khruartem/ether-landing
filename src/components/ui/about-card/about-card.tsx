import type { FC } from "react";

import { Icon } from "../../icon";
import { TextUI } from "../text";

import type { TAboutCardUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useTypographyTitle } from "./useTypographyTitle";
import { useTypographyText } from "./useTypographyText";

import styles from "./about-card.module.css";

export const AboutCardUI: FC<TAboutCardUIProps> = ({ card }) => {
  const typographyTitle = useTypographyTitle();
  const typographyText = useTypographyText();

  const { icon, title, text } = card;

  return (
    <li className={styles.card}>
      <Icon name={icon} width={24} height={24} color={Colors.Nephritis100} />
      <TextUI typography={Typography[typographyTitle]} color={Colors.Navy}>
        {title}
      </TextUI>
      <TextUI typography={Typography[typographyText]} color={Colors.Dark100}>
        {text}
      </TextUI>
    </li>
  );
};
