import type { FC } from "react";

import type { TMainLayoutProps } from "./types";

export const Layout: FC<TMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
};
