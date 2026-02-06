import type { FC } from "react";
import clsx from "clsx";

import { RadioButtonUI } from "../../radio-button";
import { DateTimeUI } from "../../badge/date-time";
import { EmployeeList } from "../../../badge/employee-list";

import type { TSmallTaskUIProps } from "./types";

import styles from "./small-task.module.css";
import { BadgeUI } from "../../badge/badge";

export const SmallTaskUI: FC<TSmallTaskUIProps> = ({
  badgeTitle,
  title,
  date,
  time,
  employees,
  successed,
  onСomplete,
}) => {
  return (
    <BadgeUI title={badgeTitle} className={styles.hero__block_task}>
      <div
        className={clsx(
          styles["small-task"],
          successed && styles["small-task_complete"],
        )}
        onClick={onСomplete}
      >
        <RadioButtonUI text={title} checked={successed} />
        <DateTimeUI date={date} time={time} />
        <EmployeeList employees={employees} />
      </div>
    </BadgeUI>
  );
};
