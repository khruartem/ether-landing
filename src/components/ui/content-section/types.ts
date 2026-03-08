import type { ReactNode } from "react";
import type { TSection, TSectionTitle } from "../../../utils/types";

export type TContentSectionUIProps = {
  sectionProps: TSection;
  titleProps: TSectionTitle;
  children: ReactNode;
};
