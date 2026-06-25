import type { TBreakpointValues } from "../../../hooks/usePxToVw";
import type { TAdvantagesTransform } from "../../../utils/types";

export type TAdvantagesImageUIProps = {
  src: string;
  transform?: TAdvantagesTransform;
  position: TBreakpointValues;
  maxHeight?: TBreakpointValues;
};
