import { type FC } from "react";
import { useInView } from "react-intersection-observer";

import { AdvantagesItemUI } from "../ui/advantages-item";

import type { TAdvantagesItemProps } from "./types";

export const AdvantagesItem: FC<TAdvantagesItemProps> = ({
  item,
  descriptionPosition,
}) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <AdvantagesItemUI
      item={item}
      descriptionPosition={descriptionPosition}
      inView={inView}
      ref={ref}
    />
  );
};
