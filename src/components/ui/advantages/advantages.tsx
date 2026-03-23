import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";
import { AdvantagesTabs } from "../../advantages-tabs";
import { AdvantagesItemsList } from "../../advantages-items-list";

import type { TAdvantagesUIProps } from "./types";

import styles from "./advantages.module.css";

export const AdvantagesUI: FC<TAdvantagesUIProps> = ({
  contentSectionProps,
}) => {
  const { sectionProps, titleProps } = contentSectionProps;

  return (
    <SectionUI {...sectionProps} className={styles.section_advantages}>
      <SectionTitleUI {...titleProps} />
      <AdvantagesTabs />
      <AdvantagesItemsList />
    </SectionUI>
  );
};
