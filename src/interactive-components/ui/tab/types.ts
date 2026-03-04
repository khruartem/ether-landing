import type { TTab } from "../../../../utils/types";

export type TTabUIProps = {
  tab: TTab;
  onClick: () => void;
  current: boolean;
};
