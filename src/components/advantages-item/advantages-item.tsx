import { type FC } from "react";
import { useInView } from "react-intersection-observer";

import { AdvantagesItemProvider } from "./advantages-item-context";
import { AdvantagesItemUI } from "../ui/advantages-item";

import type { TAdvantagesItemProps } from "./types";

export const AdvantagesItem: FC<TAdvantagesItemProps> = ({
  item,
  groupIndex,
  itemIndex,
}) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const contextValue = { inView };
  const descriptionPosition =
    groupIndex % 2 === 0
      ? itemIndex % 2 === 0
        ? "left"
        : "right"
      : itemIndex % 2 === 0
        ? "right"
        : "left";

  return (
    <AdvantagesItemProvider value={contextValue}>
      <AdvantagesItemUI
        item={item}
        descriptionPosition={descriptionPosition}
        ref={ref}
      />
    </AdvantagesItemProvider>
  );
};
