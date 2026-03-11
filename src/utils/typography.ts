export type TTypography = {
  font: "Unbounded" | "Roboto";
  weight: string;
  size: string;
  lineHeight: string;
  textAlign?: string;
};

const Typography = {
  Title_900_100: {
    font: "Unbounded",
    weight: "900",
    size: "100px",
    lineHeight: "100px",
    textAlign: "center",
  },
  Title_600_68: {
    font: "Unbounded",
    weight: "600",
    size: "68px",
    lineHeight: "80px",
    textAlign: "center",
  },
  Title_500_28: {
    font: "Unbounded",
    weight: "500",
    size: "28px",
    lineHeight: "40px",
  },
  Title_500_20: {
    font: "Unbounded",
    weight: "500",
    size: "20px",
    lineHeight: "32px",
  },
  Title_500_14: {
    font: "Unbounded",
    weight: "500",
    size: "14px",
    lineHeight: "20px",
  },
  Title_400_14: {
    font: "Unbounded",
    weight: "400",
    size: "14px",
    lineHeight: "20px",
  },
  Text_500_14: {
    font: "Roboto",
    weight: "500",
    size: "14px",
    lineHeight: "20px",
  },
  Text_400_20: {
    font: "Roboto",
    weight: "400",
    size: "20px",
    lineHeight: "32px",
  },
  Text_400_18: {
    font: "Roboto",
    weight: "400",
    size: "18px",
    lineHeight: "28px",
  },
  Text_400_16: {
    font: "Roboto",
    weight: "400",
    size: "16px",
    lineHeight: "24px",
  },
  Text_400_14: {
    font: "Roboto",
    weight: "400",
    size: "14px",
    lineHeight: "20px",
  },
  Text_400_12: {
    font: "Roboto",
    weight: "400",
    size: "12px",
    lineHeight: "16px",
  },
} as const;

type Typography = (typeof Typography)[keyof typeof Typography];

export { Typography };
