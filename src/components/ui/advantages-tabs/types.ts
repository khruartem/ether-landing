import type { AdvantagesItems } from "../../../utils/advantagesItems";

export type TAdvantagesTabsUIProps = {
  tabs: AdvantagesItems[];
  currentTab: AdvantagesItems;
  onTabChange: (tab: AdvantagesItems) => void;
};
