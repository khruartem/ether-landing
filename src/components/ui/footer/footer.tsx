import type { FC } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../logo";
import { TextUI } from "../text";
import { SocialsListUI } from "../socials-list";

import type { TFooterUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./footer.module.css";

export const FooterUI: FC<TFooterUIProps> = ({ year }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <Logo type={"full"} />
        <SocialsListUI />
      </div>
      <TextUI
        as={"span"}
        typography={Typography.Text_400_14}
        color={Colors.Light100}
        className={styles.footer__text}
      >
        {`${year} Создано под эгидой творческой экосистемы `}
        <Link
          to={"https://otkter.ru/"}
          target="_blank"
          className={styles.footer__link}
        >
          {"«Открытая Территория»"}
        </Link>
      </TextUI>
    </footer>
  );
};
