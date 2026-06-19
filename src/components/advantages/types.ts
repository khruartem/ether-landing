import type { AdvantagesItems } from "../../utils/advantagesItems";
import type { TAdvantagesGroup } from "../../utils/types";

export type TAdvantagesContextValue = {
  tabs: AdvantagesItems[];
  currentTab: AdvantagesItems;
  advantagesGroups: TAdvantagesGroup[];
  handleTabChange: (tab: AdvantagesItems) => void;
};
