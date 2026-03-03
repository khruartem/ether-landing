import type { Colors } from "./colors";
import type { Week } from "./week";

export type TNavItem = {
  label: string;
  to: string;
};

export type TBadgeTitle = {
  text: string;
  decorated?: boolean;
};

export type TBadgeItem = {
  text: string;
  active: boolean;
};

export type TBadge = {
  type: "badge";
  item: TBadgeItem;
};

export type TAdd = {
  type: "add";
  item: null;
};

export type TEmployee = {
  firstname: string;
  lastname: string;
  image: string;
};

export type TGalleryIcon = "music" | "video" | "image";

export type TGalleryItem = {
  icon: TGalleryIcon;
  background?: string;
  title?: string;
  backhroundColor?: Colors;
};

export type TTabIcon = "task" | "schedule";

export type TTab = {
  icon: TTabIcon;
  text: string;
};

export type TWeek = {
  currentDayIndex: number;
  weekArray: Week[];
};

export type TCalendarTop = {
  monthWithYear: string;
  onClickRight: () => void;
  onClickLeft: () => void;
};

export type TCalendarDays = {
  daysArray: number[];
  emphasisedDays?: boolean;
  currentDay?: number;
  onClickDay: (e: React.MouseEvent) => void;
  onMouseEnterDay?: (e: React.MouseEvent) => void;
  onMouseLeaveDay?: (e: React.MouseEvent) => void;
};

export type TCalendarRange = {
  start: number | null;
  end: number | null;
};

export type TSectionSubtitle = {
  text: string;
  icon: string;
  backgroundColor: Colors;
};
