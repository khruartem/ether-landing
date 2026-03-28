import type { FC } from "react";

import { FooterUI } from "../ui/footer";

export const Footer: FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return <FooterUI year={currentYear} />;
};
