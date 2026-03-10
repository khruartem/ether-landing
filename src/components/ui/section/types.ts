import type { ReactNode } from "react";

export type TSectionUIProps = {
  id?: string;
  decorated?: boolean;
  paddinged?: boolean;
  gap?: number;
  className?: string;
  children: ReactNode;
};
