import type { ReactNode } from "react";

export type TSectionUIProps = {
  id?: string;
  decorated?: boolean;
  paddinged?: boolean;
  className?: string;
  children: ReactNode;
};
