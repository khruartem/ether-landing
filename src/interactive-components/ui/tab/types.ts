import type { TTab } from "../../types";

export type TTabUIProps = {
  tab: TTab;
  onClick: () => void;
  current: boolean;
};
