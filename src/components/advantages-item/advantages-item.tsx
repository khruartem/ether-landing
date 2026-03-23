import { useEffect, type FC } from "react";
import { useInView } from "react-intersection-observer";

import { AdvantagesItemUI } from "../ui/advantages-item";

import type { TAdvantagesItemProps } from "./types";
import { useAdvantagesContext } from "../../hooks/useAdvantagesContext";

export const AdvantagesItem: FC<TAdvantagesItemProps> = ({
  item,
  descriptionPosition,
}) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const { currentTab, handleTabChange } = useAdvantagesContext();

  useEffect(() => {
    if (inView && currentTab !== item.type) {
      handleTabChange(item.type);
    }
    // if (inView) console.log(inView, currentTab, item.type);
    // else console.log("pisya");
  }, [inView]);

  return (
    <AdvantagesItemUI
      item={item}
      descriptionPosition={descriptionPosition}
      inView={inView}
      ref={ref}
    />
  );
};
