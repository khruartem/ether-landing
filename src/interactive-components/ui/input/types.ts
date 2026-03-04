import type { InputMaskProps } from "@react-input/mask";
import type { InputHTMLAttributes } from "react";

export type TInputUIProps = InputMaskProps & InputHTMLAttributes<HTMLInputElement> & {
  withMask?: boolean;
};
