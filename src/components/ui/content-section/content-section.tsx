import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";

import type { TContentSectionUIProps } from "./types";

export const ContentSectionUI: FC<TContentSectionUIProps> = ({
  sectionProps,
  titleProps,
  children,
}) => {
  return (
    <SectionUI {...sectionProps}>
      <SectionTitleUI {...titleProps} />
      {children}
    </SectionUI>
  );
};
