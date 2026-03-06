import type { FC } from "react";
import clsx from "clsx";

import { BadgeUI } from "../badge";
import { BadgeTitleUI } from "../badge-title";
import { InputUI } from "../input";
import { BadgeListUI } from "../badge-list";

import type { TEventUIProps } from "./types";

import styles from "./event.module.css";

export const EventUI: FC<TEventUIProps> = ({ name, date, badges }) => {
  return (
    <BadgeUI className={styles["hero__block_event"]} gap={32}>
      <div className={styles.input}>
        <BadgeTitleUI title={name.title} />
        <InputUI placeholder={name.placeholder} />
      </div>
      <div className={styles.input}>
        <BadgeTitleUI title={date.title} />
        <div className={styles["date-time"]}>
          <InputUI
            placeholder={date.datePlaceholder}
            className={clsx(
              styles["date-time__input"],
              styles["date-time__input_date"],
            )}
          />
          <InputUI
            placeholder={date.timePlaceholder}
            className={clsx(
              styles["date-time__input"],
              styles["date-time__input_time"],
            )}
          />
        </div>
      </div>
      <div className={styles.input}>
        <BadgeTitleUI title={badges.title} />
        <BadgeListUI badges={badges.list} clue={badges.clue} />
      </div>
    </BadgeUI>
  );
};
