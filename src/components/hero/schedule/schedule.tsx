import { type FC } from "react";

import { BadgeUI } from "../../ui/badge/badge";
import { Calendar } from "../../badge/calendar";

export const Schedule: FC = () => {
  return (
    <BadgeUI gap={12}>
      <Calendar />
    </BadgeUI>
  );
};
