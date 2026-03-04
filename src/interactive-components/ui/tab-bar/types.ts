import type { TTab } from "../../../../utils/types";

export type TTabBarUIProps = {
  tabs: TTab[];
  currentTab: TTab;
  onTabClick: (tab: TTab) => void;
};
