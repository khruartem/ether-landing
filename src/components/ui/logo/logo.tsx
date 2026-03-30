import type { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Icon } from "../../icon";

import type { TLogoUIProps } from "./types";

export const LogoUI: FC<TLogoUIProps> = ({ url, type, onClick }) => {
  return (
    <Link to={url} onClick={onClick} style={{ height: 36 }}>
      <Icon
        name={clsx(
          type === "full" && "ether-full",
          type === "sign" && "ether-sign",
        )}
        width={type === "full" ? 132 : 44}
        height={type === "full" ? 32 : 36}
      />
    </Link>
  );
};
