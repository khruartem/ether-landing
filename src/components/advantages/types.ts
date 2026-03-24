import type { ReactNode } from "react";
import type { AdvantagesItems } from "../../utils/advantagesItems";
import type { TAdvantagesGroup } from "../../utils/types";

export type TAdvantagesContextValue = {
  tabs: AdvantagesItems[];
  currentTab: AdvantagesItems;
  advantagesGroups: TAdvantagesGroup[];
  handleTabChange: (tab: AdvantagesItems) => void;
};

export type TAdvantagesProviderProps = {
  value: TAdvantagesContextValue;
  children: ReactNode;
};
