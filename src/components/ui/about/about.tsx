import type { FC } from "react";

import { ContentSectionUI } from "../content-section";
import { AboutImgUI } from "../about-img";
import { AboutCardsGrid } from "../../about-cards-grid";

import type { TAboutUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./about.module.css";

export const AboutUI: FC<TAboutUIProps> = ({ contentSectionProps }) => {
  const aboutStyle = useStyle();
  const { sectionProps, titleProps } = contentSectionProps;

  return (
    <ContentSectionUI
      sectionProps={{
        ...sectionProps,
        className: styles.section_about,
        style: aboutStyle,
      }}
      titleProps={titleProps}
    >
      {/* <AboutImgUI /> */}
      <AboutCardsGrid />
    </ContentSectionUI>
  );
};
