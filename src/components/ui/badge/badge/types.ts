import type { ReactNode } from "react";
import type { TBadgeTitle } from "../../../../utils/types";

export type TBadgeUIProps = {
  title?: TBadgeTitle;
  children: ReactNode;
};
