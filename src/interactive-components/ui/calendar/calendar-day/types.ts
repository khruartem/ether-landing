export type TCalendarDayUIProps = {
  day: number | null;
  current?: boolean;
  emphasised?: boolean;
  onClickDay: (e: React.MouseEvent) => void;
  onMouseEnterDay?: (e: React.MouseEvent) => void;
  onMouseLeaveDay?: (e: React.MouseEvent) => void;
};
