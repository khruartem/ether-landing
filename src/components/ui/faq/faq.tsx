import type { FC } from "react";

import { ContentSectionUI } from "../content-section";

import type { TFAQUIProps } from "./types";

export const FAQUI: FC<TFAQUIProps> = ({ contentSectionProps }) => {
  const { sectionProps, titleProps } = contentSectionProps;

  return (
    <ContentSectionUI
      sectionProps={{ ...sectionProps }}
      titleProps={titleProps}
    >
      {null}
    </ContentSectionUI>
  );
};
