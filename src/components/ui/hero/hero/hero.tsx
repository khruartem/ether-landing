import type { FC } from "react";
import { SectionUI } from "../../section";
import { HeadingUI } from "../../heading";
import { HeroGridUI } from "../hero-grid";
import { Activity } from "../../../hero/activity";
import { Schedule } from "../../../hero/schedule";
import { SmallTask } from "../../../hero/small-task";

import styles from "./hero.module.css";
import { Portfolio } from "../../../hero/portfolio";

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
      </HeroGridUI>
    </SectionUI>
  );
};
