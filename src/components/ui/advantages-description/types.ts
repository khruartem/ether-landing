import type { AdvantagesItems } from "../../../utils/advantagesItems";

export type TAdvantagesDescriptionUIProps = {
  type: AdvantagesItems;
  title: string;
  text: string;
  position: "left" | "right";
};
