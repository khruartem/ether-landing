import type { FC } from "react";

import { LogoUI } from "../ui/logo";

export const Logo: FC = () => {
  const home = "/";

  return <LogoUI url={home} />;
};
