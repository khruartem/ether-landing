import type { FC } from "react";

import { OpenNavigationUI } from "../ui/open-navigation";
import { useNavigationContext } from "../navigation/navigation-context";

export const OpenNavigation: FC = () => {
  const props = useNavigationContext();

  return <OpenNavigationUI {...props} />;
};
