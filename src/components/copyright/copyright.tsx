import type { FC } from "react";

import { CopyrightUI } from "../ui/copyright";

export const Copyright: FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return <CopyrightUI year={currentYear} />;
};
