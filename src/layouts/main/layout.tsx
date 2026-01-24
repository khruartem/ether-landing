import type { FC } from "react";

import { HeaderUI } from "../../components/ui/header/header";

import type { TMainLayoutProps } from "./types";

export const Layout: FC<TMainLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderUI />
      <main className="main">{children}</main>
    </>
  );
};
