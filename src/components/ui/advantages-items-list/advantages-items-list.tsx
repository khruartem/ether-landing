import type { FC } from "react";
import type { TAdvantagesItemsListUIProps } from "./types";

export const AdvantagesItemsListUI: FC<TAdvantagesItemsListUIProps> = ({
  items,
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <AdvantagesItemUI
          key={index}
          item={item}
          descriptionPosition={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </ul>
  );
};
