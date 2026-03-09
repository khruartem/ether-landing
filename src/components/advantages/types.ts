import type { ReactNode } from "react";
import type { TAdvantagesTab } from "../../utils/types";

export type TAdvantagesContextValue = {
  tabs: TAdvantagesTab[];
  currentTab: TAdvantagesTab;
  onTabChange: (tab: TAdvantagesTab) => void;
};

export type TAdvantagesProviderProps = {
  value: TAdvantagesContextValue;
  children: ReactNode;
};
