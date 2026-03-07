import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";
import { AboutCardsGrid } from "../../about-cards-grid";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import flashSvg from "../../../assets/icons/flash.svg";

import styles from "./about.module.css";

export const AboutUI: FC = () => {
  return (
    <SectionUI id="about" decorated className={styles.section_about}>
      <SectionTitleUI
        text={["Цифровой интерфейс", "организации мероприятий"]}
        emphasized={"организации"}
        subtitle={{
          text: "У нас общая цель",
          icon: flashSvg,
          backgroundColor: Colors.Light80,
        }}
        typography={Typography.Title_600_68}
        as={"h2"}
      />
      <AboutCardsGrid />
    </SectionUI>
  );
};
