import type { FC } from "react";

import { EventInput } from "../../../badge/event-input";
import { BadgeUI } from "../../badge/badge";
import { DatePicker } from "../../../badge/date-picker";
import { EventType } from "../../../badge/event-type";

import styles from "./event.module.css";

export const EventUI: FC = () => {
  return (
    <BadgeUI className={styles["hero__block_event"]}>
      <EventInput />
      <DatePicker />
      <EventType />
    </BadgeUI>
  );
};
