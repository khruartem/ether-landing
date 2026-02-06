import { useState, type FC } from "react";

import { SmallTaskUI } from "../../../ui/badge/small-task/small-task";

import type { TEmployee } from "../../../../utils/types";

export const SmallTask: FC = () => {
  const [successed, setSuccessed] = useState(false);

  const handleComplete = (state: boolean) => {
    setSuccessed(state);
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
      title="Раскадровки первого акта"
      date="02.01.2025"
      time="14:00"
      employees={employees}
      successed={successed}
      onСomplete={() => handleComplete(!successed)}
    />
  );
};
