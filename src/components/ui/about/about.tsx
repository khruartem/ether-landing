import type { FC } from "react";

import { ContentSectionUI } from "../content-section";
import { AboutCardsGrid } from "../../about-cards-grid";

import type { TAboutUIProps } from "./types";

import styles from "./about.module.css";

export const AboutUI: FC<TAboutUIProps> = ({ contentSectionProps }) => {
  const { sectionProps, titleProps } = contentSectionProps;

  return (
    <ContentSectionUI
      sectionProps={{ ...sectionProps, className: styles.section_about }}
      titleProps={titleProps}
    >
      <AboutCardsGrid />
    </ContentSectionUI>
  );
};
