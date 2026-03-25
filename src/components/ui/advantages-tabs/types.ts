import type { SyntheticEvent } from "react";
import type { AdvantagesItems } from "../../../utils/advantagesItems";

export type TAdvantagesTabsUIProps = {
  tabs: AdvantagesItems[];
  currentTab: AdvantagesItems;
  onTabChange: (tab: AdvantagesItems, e?: SyntheticEvent) => void;
};
