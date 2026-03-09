import type { FC } from "react";

import { ContentSectionUI } from "../content-section";
import { AdvantagesTabs } from "../../advantages-tabs";

import type { TAdvantagesUIProps } from "./types";

export const AdvantagesUI: FC<TAdvantagesUIProps> = ({
  contentSectionProps,
}) => {
  return (
    <ContentSectionUI {...contentSectionProps}>
      <AdvantagesTabs />
      {/* <AdvantagesArtistsBlock />
      <AdvantagesEventsBlock />
      <AdvantagesScheduleBlock /> */}
    </ContentSectionUI>
  );
};
