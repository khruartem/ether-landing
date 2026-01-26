import type { TBadgeItem } from "../../../../utils/types";

export type TBadgeListItemUIProps = {
  badge: TBadgeItem;
  // type: TBadge | TAdd;
  onClick: () => void;
};
