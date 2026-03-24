import { useEffect, type FC } from "react";

import { AdvantagesItemsListUI } from "../ui/advantages-items-list";

import { useAdvantagesContext } from "../../hooks/useAdvantagesContext";
import { useInView } from "react-intersection-observer";

export const AdvantagesItemsList: FC = () => {
  const { advantagesGroups } = useAdvantagesContext();
  // const {ref, inView} = useInView({threshold: 0});

  // useEffect(() => {
  //   if (inView && currentTab !== )
  // })

  return <AdvantagesItemsListUI groups={advantagesGroups} />;
};
