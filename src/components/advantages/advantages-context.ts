import { createContext } from "react";
import type { TAdvantagesContextValue } from "./types";
import { AdvantagesItems } from "../../utils/advantagesItems";

const initialValue: TAdvantagesContextValue = {
  tabs: [],
  currentTab: AdvantagesItems.artists,
  shownSection: AdvantagesItems.artists,
  advantagesItems: [],
  handleTabChange: (tab) => {
    console.log(tab);
  },
  handleSetShownSection: (section) => {
    console.log(section);
  },
};

export const AdvantagesContext =
  createContext<TAdvantagesContextValue>(initialValue);
