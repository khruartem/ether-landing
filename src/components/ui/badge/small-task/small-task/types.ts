import type { TEmployee } from "../../../../../utils/types";

export type TSmallTaskUIProps = {
  title: string;
  date: string;
  time: string;
  employees: TEmployee[];
  successed: boolean;
  onСomplete?: () => void;
};
