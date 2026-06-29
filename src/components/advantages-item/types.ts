import type { TAdvantagesItem } from "../../utils/types";

export type TAdvantagesItemProps = {
  item: TAdvantagesItem;
  groupIndex: number;
  itemIndex: number;
};

export type TAdvantagesItemContextValue = {
  inView: boolean;
}
