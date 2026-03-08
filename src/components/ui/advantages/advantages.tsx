import type { FC } from "react";

import { ContentSectionUI } from "../content-section";

import type { TAdvantagesUIProps } from "./types";

export const AdvantagesUI: FC<TAdvantagesUIProps> = ({
  contentSectionProps,
}) => {
  return <ContentSectionUI {...contentSectionProps}>{null}</ContentSectionUI>;
};
