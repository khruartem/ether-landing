import type { TNavigationContext } from "./types";
import { createComponentContext } from "../../utils/createComponentContext";

const initialValue: TNavigationContext = {
  opened: false,
  onOpen: () => {},
};

export const [NavigationProvider, useNavigationContext] =
  createComponentContext<TNavigationContext>(initialValue);
