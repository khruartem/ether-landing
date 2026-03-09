import { createContext } from "react";
import type { TAdvantagesContextValue } from "./types";

const initialValue: TAdvantagesContextValue = {
  tabs: [],
  currentTab: { text: "Творцы и объединения", value: "artists" },
  handleTabChange: (tab) => {
    console.log(tab);
  },
};

export const AdvantagesContext =
  createContext<TAdvantagesContextValue>(initialValue);
