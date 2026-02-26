import type { FC } from "react";
import { SectionUI } from "../../section";
import { HeadingUI } from "../../heading";
import { HeroGridUI } from "../hero-grid";
import { Activity } from "../../../hero/activity";
import { Schedule } from "../../../hero/schedule";
import { SmallTask } from "../../../hero/small-task";

import styles from "./hero.module.css";
import { Portfolio } from "../../../hero/portfolio";
import { TabBar } from "../../../badge/tab-bar";
import { EventInput } from "../../../badge/event-input";
import { DatePickerUI } from "../../badge/date-picker/date-picker";
import { Calendar } from "../../../badge/calendar";

export const HeroUI: FC = () => {
  return (
    <SectionUI>
      <HeadingUI />
      <HeroGridUI>
        <div className={styles.container}>
          <Activity />
          <SmallTask />
        </div>
        <Portfolio />
        <Schedule />
        <div>
          <TabBar />
          <EventInput />
          <Calendar />
        </div>
      </HeroGridUI>
    </SectionUI>
  );
};
