import { createContext } from "react";
import type { TAdvantagesContextValue } from "./types";

const initialValue: TAdvantagesContextValue = {
  tabs: [],
  currentTab: "artists",
  onTabChange: (tab) => {
    console.log(tab);
  },
};

export const AdvantagesContext =
  createContext<TAdvantagesContextValue>(initialValue);
