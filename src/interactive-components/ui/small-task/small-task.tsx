import type { FC } from "react";
import clsx from "clsx";

import { BadgeUI } from "../../../components/ui/badge/badge";
import { RadioButtonUI } from "../../../components/ui/radio-button";
import { DateTimeUI } from "../../../components/ui/badge/date-time";
import { EmployeeList } from "../../../components/badge/employee-list";

import type { TSmallTaskUIProps } from "./types";

import styles from "./small-task.module.css";

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
    <BadgeUI title={badgeTitle} gap={12}>
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
