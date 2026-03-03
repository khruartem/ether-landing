import type { TSectionSubtitle } from "../../../utils/types";
import type { Typography } from "../../../utils/typography";

export type TSectionTitleUIProps = {
  text: string[];
  subtitle?: TSectionSubtitle;
  emphasized?: string;
  typography: Typography;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
};
