import type { FC } from "react";

import { BadgeUI } from "../badge";
import { BadgeTitleUI } from "../badge-title";
import { InputUI } from "../input";

import type { TEventUIProps } from "./types";

import type { TBadgeTitle } from "../../../utils/types";

import styles from "./event.module.css";

export const EventUI: FC<TEventUIProps> = ({name, date, time}) => {
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
      <BadgeTitleUI
        title={{
          text: "Дата и время проведения",
        }}
      />
      <div className={styles["date-time"]}>
      <InputUI
        withMask
        id="date-picker"
        name="date-picker"
        type="text"
        placeholder="Дата мероприятия"
        mask="dd.mm.yyyy"
        replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
        showMask
        className={clsx(
          styles["date-time__input"],
          styles["date-time__input_date"],
        )}
      />
      <InputUI
        withMask
        id="date-picker"
        name="date-picker"
        type="text"
        placeholder="Время мероприятия"
        mask="hh:mm"
        replacement={{ h: /\d/, m: /\d/ }}
        showMask
        className={styles["date-time__input"]}
      />
    </div>
      <EventType />
    </BadgeUI>
  );
};
