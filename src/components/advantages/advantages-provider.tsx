import type { FC } from "react";

import { AdvantagesContext } from "./advantages-context";

import type { TAdvantagesProviderProps } from "./types";

export const AdvantagesProvider: FC<TAdvantagesProviderProps> = ({
  value,
  children,
}) => {
  return (
    <AdvantagesContext.Provider value={value}>
      {children}
    </AdvantagesContext.Provider>
  );
};
