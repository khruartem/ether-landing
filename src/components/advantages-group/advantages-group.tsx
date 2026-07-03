import { type FC } from "react";
import { useInView } from "react-intersection-observer";

import { AdvantagesGroupUI } from "../ui/advantages-group";

import type { TAdvantagesGroupProps } from "./types";

import { AdvantagesItems } from "../../utils/advantagesItems";

import { useAdvantagesContext } from "../advantages/advantages-context";

export const AdvantagesGroup: FC<TAdvantagesGroupProps> = ({
  group,
  children,
}) => {
  const [ref] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      const targetTab = AdvantagesItems[id];
      console.log(targetTab)

      if (inView && currentTab !== targetTab) {
        handleTabChange(targetTab);
      }
    },
  });
  const { currentTab, handleTabChange } = useAdvantagesContext();

  const { id } = group;

  return <AdvantagesGroupUI group={group} children={children} ref={ref} />;
};
