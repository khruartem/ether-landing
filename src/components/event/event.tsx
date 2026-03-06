import type { FC } from "react";

import { EventUI } from "../ui/event";

import type { TEventBadges, TEventDate, TEventName } from "../../utils/types";

export const Event: FC = () => {
  const name: TEventName = {
    title: { text: "Название мероприятия", decorated: true },
    placeholder: "Новое мероприятие",
  };

  const date: TEventDate = {
    title: {
      text: "Дата и время проведения",
    },
    datePlaceholder: "01.01.2025",
    timePlaceholder: "18:00",
  };

  const badges: TEventBadges = {
    title: {
      text: "Формат",
      decorated: true,
    },
    list: [
      {
        text: "Спектакль",
        active: true,
        decorated: true,
      },
      {
        text: "Мастер-класс",
        active: false,
        decorated: false,
      },
      {
        text: "Конкурс",
        active: false,
        decorated: false,
      },
      {
        text: "Короткий метр",
        active: false,
        decorated: false,
      },
    ],
    clue: "Укажите один вариант",
  };

  return <EventUI name={name} date={date} badges={badges} />;
};
