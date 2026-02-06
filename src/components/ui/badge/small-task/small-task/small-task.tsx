import type { FC } from "react";
import clsx from "clsx";

import { RadioButtonUI } from "../../../radio-button";
import { DateTimeUI } from "../date-time";
import { EmployeeList } from "../../../../badge/small-task/employee-list";

import type { TSmallTaskUIProps } from "./types";

import styles from "./small-task.module.css";

export const SmallTaskUI: FC<TSmallTaskUIProps> = ({
  title,
  date,
  time,
  employees,
  successed,
  onСomplete,
}) => {
  return (
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
  );
};
