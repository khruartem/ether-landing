import type { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import type { TLogoUIProps } from "./types";

import logoFullSvg from "../../../assets/icons/ether-full.svg";
import logoSignSvg from "../../../assets/icons/ether-sigh.svg";

export const LogoUI: FC<TLogoUIProps> = ({ url, type, onClick }) => {
  return (
    <Link to={url} onClick={onClick}>
      <img
        src={clsx(
          type === "full" && logoFullSvg,
          type === "sign" && logoSignSvg,
        )}
      />
    </Link>
  );
};
