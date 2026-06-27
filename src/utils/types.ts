import type { CSSProperties } from "react";
import type { AdvantagesItems } from "./advantagesItems";
import type { Colors } from "./colors";
import type { Week } from "./week";
import type { TBreakpointValues } from "../hooks/usePxToVw";

export type TNavItem = {
  label: string;
  to: string;
  onClick?: () => void;
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
  icon: "flash" | "data" | "message";
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

export type TAboutCard = {
  icon: string;
  title: string;
  text: string;
};

export type TSection = {
  id?: string;
  decorated?: boolean;
  className?: string;
  style?: CSSProperties;
};

export type TSectionTitle = {
  text: string[];
  subtitle?: TSectionSubtitle;
  emphasized?: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
};

export type TContentSection = {
  sectionProps: TSection;
  titleProps: TSectionTitle;
};


export type TAdvantagesTransform = {
  transform?: TBreakpointValues;
  // inset?: string;
  transformOrigin?: TBreakpointValues;
  // maxHeight?: string;
};

export type TStyleConfig = Partial<Record<keyof CSSProperties, TBreakpointValues>>;

export type TAdvantagesImage = {
  // defaultTransform?: TAdvantagesTransform;
  // inViewTransform: TAdvantagesTransform;
  // position: TBreakpointValues;
  // maxHeight?: TBreakpointValues;
  defaultStyleConfig?: TStyleConfig;
  inViewStyleConfig: TStyleConfig;
  src: string;
};

export type TAdvantagesGroupId = keyof typeof AdvantagesItems;

export type TAdvantagesItem = {
  type: AdvantagesItems;
  title: string;
  text: string;
  images: TAdvantagesImage[];
};

export type TAdvantagesGroup = {
  id: TAdvantagesGroupId;
  items: TAdvantagesItem[];
};

export type TDescriptionPosition = "left" | "right";

export type TQuestion = {
  title: string;
  text: string;
};

export type TEtherLogoType = "sign" | "full";

export type TSocialsType = "telegram" | "vk";

export type TMedia = {
  isLarge: boolean;
  isDesktop: boolean;
  isLaptop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};
