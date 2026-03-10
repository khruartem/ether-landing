const AdvantagesItems = {
  artists: "Творцы и объединения",
  events: "Мероприятия и задачи",
  schedule: "Графики и события",
} as const;

type AdvantagesItems = (typeof AdvantagesItems)[keyof typeof AdvantagesItems];

export { AdvantagesItems };
