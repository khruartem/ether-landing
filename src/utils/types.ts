import type { Colors } from "./colors";

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
