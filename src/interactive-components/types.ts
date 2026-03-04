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
