import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";
import { AdvantagesTabs } from "../../advantages-tabs";
import { AdvantagesItemsList } from "../../advantages-items-list";

import type { TAdvantagesUIProps } from "./types";

import { useStyle } from "./useStyle";
import { useTitleStyle } from "./useTitleStyle";

import styles from "./advantages.module.css";

export const AdvantagesUI: FC<TAdvantagesUIProps> = ({
  contentSectionProps,
}) => {
  const sectionStyle = useStyle();
  const titleStyle = useTitleStyle();

  const { sectionProps, titleProps } = contentSectionProps;

  return (
    <SectionUI
      {...sectionProps}
      className={styles.advantages}
      style={sectionStyle}
    >
      <SectionTitleUI {...titleProps} style={titleStyle} />
      <AdvantagesTabs />
      <AdvantagesItemsList />
    </SectionUI>
  );
};
