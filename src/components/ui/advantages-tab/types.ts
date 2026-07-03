import type { SyntheticEvent } from "react";
import type { AdvantagesItems } from "../../../utils/advantagesItems";

export type TAdvantagesTabUIProps = {
  tab: AdvantagesItems;
  current: boolean;
  onChange: (e: SyntheticEvent) => void;
};
