import type { FC } from "react";
import type { TTabBarUIProps } from "./types";

export const TabBarUI: FC<TTabBarUIProps> = ({tabs}) => {
  return (
    <ul>
      {tabs.map((tab, index) => {
        return <li key={index}><TabUI tab={tab} /></li>
      })}
    </ul>
  )
}