import { type FC } from "react";

import { SmallTaskUI } from "../../ui/hero/small-task";

import type { TBadgeTitle, TEmployee } from "../../../utils/types";

export const SmallTask: FC = () => {
  const badgeTitle: TBadgeTitle = {
    text: "Творческая задача",
  };

  const employees: TEmployee[] = [
    {
      firstname: "Сергей",
      lastname: "Яковлев",
      image:
        "https://storage.yandexcloud.net/otkter-bucket/team/icons/yakovlev.avif",
    },
    {
      firstname: "Людмила",
      lastname: "Яковлева",
      image: "https://storage.yandexcloud.net/otkter-bucket/team/icons/LA.avif",
    },
    {
      firstname: "Алена",
      lastname: "Синельникова",
      image:
        "https://storage.yandexcloud.net/otkter-bucket/team/icons/sinelnikova.webp",
    },
    {
      firstname: "Арсений",
      lastname: "Аспек",
      image:
        "https://storage.yandexcloud.net/otkter-bucket/team/icons/aspek.webp",
    },
    {
      firstname: "Артем",
      lastname: "Хрусталев",
      image:
        "https://storage.yandexcloud.net/otkter-bucket/team/icons/hrustalev.webp",
    },
  ];

  return (
    <SmallTaskUI
      badgeTitle={badgeTitle}
      title="Раскадровки первого акта"
      date="02.01.2025"
      time="14:00"
      employees={employees}
    />
  );
};
