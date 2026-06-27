import type { CSSProperties } from "react";
import { usePxToVw } from "../hooks/usePxToVw";
import type { TStyleConfig } from "./types";

export const createUseStyleHook = (
  config: TStyleConfig,
  callback?: () => CSSProperties,
) => {
  return (): CSSProperties => {
    const result: Record<string, unknown> = {};
    const callbackResult = callback ? callback() : {};

    Object.entries(config).forEach(([property, breakpoints]) => {
      result[property] = usePxToVw(breakpoints);
    });

    return { ...result, ...callbackResult } as CSSProperties;
  };
};
