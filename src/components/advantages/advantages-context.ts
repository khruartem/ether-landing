import type { TAdvantagesContextValue } from "./types";
import { AdvantagesItems } from "../../utils/advantagesItems";
import { createComponentContext } from "../../utils/createComponentContext";

const initialValue: TAdvantagesContextValue = {
  tabs: [],
  currentTab: AdvantagesItems.artists,
  advantagesGroups: [],
  handleTabChange: (tab) => {
    console.log(tab);
  },
};

export const [AdvantagesProvider, useAdvantagesContext] =
  createComponentContext<TAdvantagesContextValue>(initialValue);
