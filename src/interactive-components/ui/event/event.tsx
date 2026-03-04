import type { FC } from "react";

import { EventInput } from "../../event-input";
import { BadgeUI } from "../../../components/ui/badge/badge";
import { DatePicker } from "../../date-picker";
import { EventType } from "../../event-type";

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
