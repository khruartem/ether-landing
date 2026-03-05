import type { FC } from "react";

import { Schedule, Task } from "../../icons";

import type { TTabIconUIProps } from "./types";

export const TabIconUI: FC<TTabIconUIProps> = ({ icon, color }) => {
  switch (icon) {
    case "task":
      return <Task color={color} />;
    case "schedule":
      return <Schedule color={color} />;
    default:
      return null;
  }
};
