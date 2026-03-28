import type { FC } from "react";

import { LogoUI } from "../ui/logo";

import type { TLogoProps } from "./types";

export const Logo: FC<TLogoProps> = ({ type }) => {
  const home = "/";

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <LogoUI url={home} type={type} onClick={handleClick} />;
};
