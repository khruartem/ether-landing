import type { FC } from "react";
import { RadioButtonUI } from "../../radio-button";
import type { TSmallTaskUIProps } from "./types";

export const SmallTaskUI: FC<TSmallTaskUIProps> = ({
  title,
  date,
  time,
  employees,
  onSuccess
}) => {
  <div onClick={onSuccess}>

    <RadioButtonUI text={title} checked={false} />
  </div>;
};
