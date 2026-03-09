import type { TAdvantagesTab } from "../../../utils/types";

export type TAdvantagesTabsUIProps = {
  tabs: TAdvantagesTab[];
  currentTab: TAdvantagesTab;
  onTabChange: (tab: TAdvantagesTab) => void;
};
