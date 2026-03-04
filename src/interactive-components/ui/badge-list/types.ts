import type { TBadgeItem } from "../../types";

export type TBadgeListUIProps = {
  badges: TBadgeItem[];
  clue: string;
  onBadgeClick: (index: number) => void;
  addButton?: boolean;
};
