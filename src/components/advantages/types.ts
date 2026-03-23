import type { ReactNode } from "react";
import type { AdvantagesItems } from "../../utils/advantagesItems";
import type { TAdvantagesItem } from "../../utils/types";

export type TAdvantagesContextValue = {
  tabs: AdvantagesItems[];
  currentTab: AdvantagesItems;
  shownSection: AdvantagesItems;
  advantagesItems: TAdvantagesItem[];
  handleTabChange: (tab: AdvantagesItems) => void;
  handleSetShownSection: (section: AdvantagesItems) => void;
};

export type TAdvantagesProviderProps = {
  value: TAdvantagesContextValue;
  children: ReactNode;
};
