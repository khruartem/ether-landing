export type TCalendarDayUIProps = {
  day: number | null;
  current?: boolean;
  onClickDay: (e: React.MouseEvent) => void;
};
