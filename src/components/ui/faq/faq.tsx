import type { FC } from "react";

import { QuestionList } from "../../question-list";

import { ContentSectionUI } from "../content-section";

import type { TFAQUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./faq.module.css";

export const FAQUI: FC<TFAQUIProps> = ({ contentSectionProps }) => {
  const sectionStyle = useStyle();
  const { sectionProps, titleProps } = contentSectionProps;

  return (
    <ContentSectionUI
      sectionProps={{
        ...sectionProps,
        className: styles.faq,
        style: sectionStyle,
      }}
      titleProps={titleProps}
    >
      <QuestionList />
    </ContentSectionUI>
  );
};
