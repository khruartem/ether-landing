import type { ReactNode } from "react";
import type { TSection } from "../../../utils/types";

export type TSectionUIProps = TSection & {
  children: ReactNode;
};
