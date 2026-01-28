import { useState, type FC } from "react";

import { BadgeUI } from "../../ui/badge/badge";
import { BadgeListUI } from "../../ui/badge/badge-list";

import type { TBadgeItem, TBadgeTitle } from "../../../utils/types";
import { Calendar } from "../../badge/calendar";
import { CalendarUI } from "../../ui/badge/calendar";

export const Activity: FC = () => {
  const title: TBadgeTitle = {
    text: "Ваша деятельность",
    decorated: true,
  };

  const badges: TBadgeItem[] = [
    {
      text: "Актер",
      active: false,
    },
    {
      text: "Режиссер",
      active: true,
    },
    {
      text: "Поэт",
      active: false,
    },
    {
      text: "Писатель",
      active: false,
    },
    {
      text: "Сценарист",
      active: false,
    },
    {
      text: "Художник",
      active: false,
    },
    {
      text: "Дизайнер",
      active: false,
    },
    {
      text: "Продюссер",
      active: false,
    },
  ];

  const [currentBadges, setCurrentBadges] = useState<TBadgeItem[]>(badges);

  const clue = "Укажите одну или несколько";

  const handleBadgeClick = (index: number) => {
    const updatedBadges = currentBadges.map((badge, currentIndex) => {
      if (currentIndex === index) badge.active = !badge.active;
      return badge;
    });

    setCurrentBadges(updatedBadges);
  };

  // const handleAdd = (text: string) => {
  //   const badgeToAdd: TBadgeItem = {
  //     text,
  //     active: false,
  //   };

  //   const updatedBadges = currentBadges.map((badge) => badge);
  //   updatedBadges.push(badgeToAdd);
  //   setCurrentBadges(updatedBadges);
  // };

  return (
    <BadgeUI title={title}>
      {/* <BadgeListUI
        badges={currentBadges}
        clue={clue}
        onBadgeClick={handleBadgeClick}
        addButton
      /> */}
      <Calendar />
    </BadgeUI>
  );
};
