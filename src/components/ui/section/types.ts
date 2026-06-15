import type { CSSProperties, ReactNode } from "react";

export type TSectionUIProps = {
  id?: string;
  decorated?: boolean;
  gap?: number;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};
