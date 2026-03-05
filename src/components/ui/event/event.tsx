import type { FC } from "react";
import clsx from "clsx";

import { BadgeUI } from "../badge";
import { BadgeTitleUI } from "../badge-title";
import { InputUI } from "../input";

import type { TEventUIProps } from "./types";

import type { TBadgeTitle } from "../../../utils/types";

import styles from "./event.module.css";

export const EventUI: FC<TEventUIProps> = ({ name, date, time }) => {
  const title: TBadgeTitle = {
    text: "Название мероприятия",
    decorated: true,
  };

  return (
    <BadgeUI className={styles["hero__block_event"]}>
      <div>
        <BadgeTitleUI title={name} />
        <InputUI placeholder="Новое мероприятие" />
      </div>
      <div>
        <BadgeTitleUI title={date} />
        <div className={styles["date-time"]}>
          <InputUI
            placeholder="Дата мероприятия"
            className={clsx(
              styles["date-time__input"],
              styles["date-time__input_date"],
            )}
          />
          <InputUI
            placeholder="Время мероприятия"
            className={styles["date-time__input"]}
          />
        </div>
      </div>
      <EventType />
    </BadgeUI>
  );
};
