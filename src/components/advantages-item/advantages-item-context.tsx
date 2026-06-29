import { createComponentContext } from "../../utils/createComponentContext";
import type { TAdvantagesItemContextValue } from "./types";

const initialValue: TAdvantagesItemContextValue = {
  inView: false,
};

export const [AdvantagesItemProvider, useAdvantagesItemContext] =
  createComponentContext<TAdvantagesItemContextValue>(initialValue);
