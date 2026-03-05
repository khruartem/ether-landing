import type { FC } from "react";

import { BadgeUI } from "../../../components/ui/badge";
import { EventInput } from "../../event-input";
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
