import type {
  TEventBadges,
  TEventDate,
  TEventName,
} from "../../../utils/types";

export type TEventUIProps = {
  name: TEventName;
  date: TEventDate;
  badges: TEventBadges;
};
