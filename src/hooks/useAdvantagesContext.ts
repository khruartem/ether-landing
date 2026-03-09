import { useContext } from "react";
import { AdvantagesContext } from "../components/advantages/advantages-context";

export const useAdvantagesContext = () => {
  return useContext(AdvantagesContext);
};
