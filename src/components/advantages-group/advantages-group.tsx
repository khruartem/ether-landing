import { useEffect, type FC } from "react";
import { useInView } from "react-intersection-observer";

import { AdvantagesGroupUI } from "../ui/advantages-group";

import type { TAdvantagesGroupProps } from "./types";

import { AdvantagesItems } from "../../utils/advantagesItems";

import { useAdvantagesContext } from "../../hooks/useAdvantagesContext";

export const AdvantagesGroup: FC<TAdvantagesGroupProps> = ({
  group,
  children,
}) => {
  const [ref, inView, entry] = useInView({ threshold: 0.3 });
  const { currentTab, handleTabChange } = useAdvantagesContext();

  const { id } = group;

  useEffect(() => {
    // if (inView && currentTab !== AdvantagesItems[id]) {
    //   handleTabChange(AdvantagesItems[id]);
    // } else {
    //   entry?.target.scrollIntoView();
    // }
    if (inView && currentTab !== AdvantagesItems[id]) {
      handleTabChange(AdvantagesItems[id]);
    }
    // else entry?.target.scrollIntoView();
  }, [inView]);

  return <AdvantagesGroupUI group={group} children={children} ref={ref} />;
};
