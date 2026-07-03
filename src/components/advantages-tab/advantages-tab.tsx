import type { FC } from "react";
import { useInView } from "react-intersection-observer";

import { AdvantagesTabUI } from "../ui/advantages-tab";

import type { TAdvantagesTabProps } from "./types";
import { useAdvantagesContext } from "../advantages/advantages-context";

export const AdvantagesTab: FC<TAdvantagesTabProps> = ({ tab }) => {
  const [ref] = useInView({
    // threshold: 1,
    onChange: (inView) => {
      if (inView && currentTab !== tab) {
        scrollToTab(tab);
      }
    },
  });

  const { currentTab, scrollToTab, handleTabChange } = useAdvantagesContext();

  return (
    <AdvantagesTabUI
      tab={tab}
      current={currentTab === tab}
      onChange={(e) => handleTabChange(tab, e)}
      ref={ref}
    />
  );
};
