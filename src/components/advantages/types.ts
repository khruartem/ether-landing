import type { SyntheticEvent } from "react";
import type { AdvantagesItems } from "../../utils/advantagesItems";
import type { TAdvantagesGroup } from "../../utils/types";

export type TAdvantagesContextValue = {
  tabs: AdvantagesItems[];
  currentTab: AdvantagesItems;
  advantagesGroups: TAdvantagesGroup[];
  handleTabChange: (tab: AdvantagesItems, e?: SyntheticEvent) => void;
  scrollToTab: (tab: AdvantagesItems) => void;
};
