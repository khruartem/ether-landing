import { useState } from "react";

import { BadgeTitleUI } from "../../ui/badge/badge-title";
import { BadgeListUI } from "../../ui/badge/badge-list";

import type { TBadgeItem, TBadgeTitle } from "../../../utils/types";

export const EventType = () => {
  const title: TBadgeTitle = {
    text: "Формат",
    decorated: true,
  };

  const badges: TBadgeItem[] = [
    {
      text: "Спектакль",
      active: false,
    },
    {
      text: "Мастер-класс",
      active: false,
    },
    {
      text: "Конкурс",
      active: false,
    },
    {
      text: "Короткий метр",
      active: false,
    },
  ];

  const [currentBadges, setCurrentBadges] = useState<TBadgeItem[]>(badges);

  const clue = "Укажите один вариант";

  const handleBadgeClick = (index: number) => {
    const updatedBadges = currentBadges.map((badge, currentIndex) => {
      if (currentIndex === index) badge.active = !badge.active;
      if (currentIndex !== index && badge.active) badge.active = false;
      return badge;
    });

    setCurrentBadges(updatedBadges);
  };

  return (
    <>
      <BadgeTitleUI title={title} />
      <BadgeListUI
        badges={currentBadges}
        clue={clue}
        onBadgeClick={handleBadgeClick}
        addButton
      />
    </>
  );
};
