import type { FC } from "react";

export const Footer: FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const logoUrl = "/";

  return <FooterUI year={currentYear} logoUrl={logoUrl} />;
};
