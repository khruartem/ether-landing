import type { TBadgeTitle, TEmployee } from "../../../utils/types";

export type TSmallTaskUIProps = {
  badgeTitle?: TBadgeTitle;
  title: string;
  date: string;
  time: string;
  employees: TEmployee[];
  successed: boolean;
  onСomplete?: () => void;
};
