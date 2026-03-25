import type { FC } from "react";
import { Link } from "react-router-dom";

import type { TLogoUIProps } from "./types";

import { EtherLogo } from "../../icons";

export const LogoUI: FC<TLogoUIProps> = ({ url }) => {
  return (
    <Link to={url}>
      <EtherLogo />
    </Link>
  );
};
