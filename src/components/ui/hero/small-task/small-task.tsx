import type { FC } from "react";

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
}) => {
  return (
    <BadgeUI title={badgeTitle} gap={12}>
      <div className={styles["small-task"]}>
        <RadioButtonUI text={title} checked={false} />
        <DateTimeUI date={date} time={time} />
        <EmployeeList employees={employees} />
      </div>
    </BadgeUI>
  );
};
