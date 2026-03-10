import type { ReactNode } from "react";
import type { AdvantagesItems } from "../../utils/advantagesItems";
import type { TAdvantagesItem } from "../../utils/types";

export type TAdvantagesContextValue = {
  tabs: AdvantagesItems[];
  currentTab: AdvantagesItems;
  advantagesItems: TAdvantagesItem[];
  handleTabChange: (tab: AdvantagesItems) => void;
};

export type TAdvantagesProviderProps = {
  value: TAdvantagesContextValue;
  children: ReactNode;
};
