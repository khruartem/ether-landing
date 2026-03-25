import type { SyntheticEvent } from "react";

export type TAdvantagesTabUIProps = {
  tab: string;
  current: boolean;
  onChange: (e: SyntheticEvent) => void;
};
