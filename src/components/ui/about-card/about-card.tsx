import type { FC } from "react";

import { TextUI } from "../text";

import type { TAboutCardUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./about-card.module.css";

export const AboutCardUI: FC<TAboutCardUIProps> = ({ card }) => {
  const { icon, title, text } = card;

  return (
    <li className={styles.card}>
      <img
        className={styles.card__icon}
        src={icon}
        alt="Иконка в карточке секции О нас"
      />
      <TextUI typography={Typography.Title_500_20} color={Colors.Navy}>
        {title}
      </TextUI>
      <TextUI typography={Typography.Text_400_18} color={Colors.Dark100}>
        {text}
      </TextUI>
    </li>
  );
};
