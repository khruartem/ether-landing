import type { TTab } from "../../types";

export type TTabBarUIProps = {
  tabs: TTab[];
  currentTab: TTab;
  onTabClick: (tab: TTab) => void;
};
