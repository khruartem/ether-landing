import { type FC } from "react";

import { BadgeUI } from "../../ui/badge/badge";
import { BadgeListUI } from "../../ui/badge/badge-list";

import type { TBadgeItem, TBadgeTitle } from "../../../utils/types";

export const Activity: FC = () => {
  const title: TBadgeTitle = {
    text: "Ваша деятельность",
    decorated: true,
  };

  const badges: TBadgeItem[] = [
    {
      text: "Актер",
      active: false,
      decorated: false,
    },
    {
      text: "Режиссер",
      active: true,
      decorated: false,
    },
    {
      text: "Поэт",
      active: false,
      decorated: false,
    },
    {
      text: "Писатель",
      active: false,
      decorated: false,
    },
    {
      text: "Сценарист",
      active: false,
      decorated: false,
    },
    {
      text: "Художник",
      active: false,
      decorated: false,
    },
    {
      text: "Дизайнер",
      active: false,
      decorated: false,
    },
    {
      text: "Продюссер",
      active: false,
      decorated: false,
    },
  ];

  const clue = "Укажите одну или несколько";

  return (
    <BadgeUI title={title}>
      <BadgeListUI badges={badges} clue={clue} />
    </BadgeUI>
  );
};
