import type { FC } from "react";

import { BadgeUI } from "../badge";
import { RadioButtonUI } from "../radio-button";
import { DateTimeUI } from "../date-time";
import { EmployeeList } from "../../employee-list";

import type { TSmallTaskUIProps } from "./types";

import styles from "./small-task.module.css";

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
