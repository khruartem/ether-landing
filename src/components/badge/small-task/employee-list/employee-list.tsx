import type { FC } from "react";

import type { TEmployeeListProps } from "./types";
import { EmployeeListUI } from "../../../ui/badge/small-task/employee-list";

export const EmployeeList: FC<TEmployeeListProps> = ({ employees }) => {
  const avatars: string[] = employees.map((employee) => {
    return employee.image;
  });
  const mainText: string = `${employees[0].firstname[0]}. ${employees[0].lastname}`;
  const subText: string = `и еще ${employees.length - 1}`;

  return (
    <EmployeeListUI avatars={avatars} mainText={mainText} subText={subText} />
  );
};
