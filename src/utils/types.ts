import type { Colors } from "./colors";
import type { Week } from "./week";

export type TNavItem = {
  label: string;
  to: string;
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

export type TCalendarDays = {
  daysArray: number[];
  currentDay: number;
};

export type TSectionSubtitle = {
  text: string;
  icon: string;
  backgroundColor: Colors;
};

export type TBadgeTitle = {
  text: string;
  decorated?: boolean;
};

export type TBadgeItem = {
  text: string;
  active: boolean;
  decorated: boolean;
};

export type TEventName = {
  title: TBadgeTitle;
  placeholder: string;
};

export type TEventDate = {
  title: TBadgeTitle;
  datePlaceholder: string;
  timePlaceholder: string;
};

export type TEventBadges = {
  title: TBadgeTitle;
  list: TBadgeItem[];
  clue: string;
};
