export type TTypography = {
  font: "Unbounded" | "Roboto";
  weight: string;
  size: string;
  lineHeight: string;
  textAlign?: string;
};

const Typography = {
  // Заголовки
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
  Title_600_60: {
    font: "Unbounded",
    weight: "600",
    size: "60px",
    lineHeight: "72px",
    textAlign: "center",
  },
  Title_600_52: {
    font: "Unbounded",
    weight: "600",
    size: "52px",
    lineHeight: "64px",
    textAlign: "center",
  },
  Title_600_40: {
    font: "Unbounded",
    weight: "600",
    size: "40px",
    lineHeight: "52px",
    textAlign: "center",
  },
  Title_600_20: {
    font: "Unbounded",
    weight: "600",
    size: "20px",
    lineHeight: "28px",
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
  Title_500_11: {
    font: "Unbounded",
    weight: "500",
    size: "10.93px",
    lineHeight: "15.61px",
  },
  Title_500_10: {
    font: "Unbounded",
    weight: "500",
    size: "10.03px",
    lineHeight: "14.33px",
  },
  Title_500_8: {
    font: "Unbounded",
    weight: "500",
    size: "8.23px",
    lineHeight: "11.76px",
  },
  Title_500_7: {
    font: "Unbounded",
    weight: "500",
    size: "6.96px",
    lineHeight: "9.95px",
  },
  Title_400_14: {
    font: "Unbounded",
    weight: "400",
    size: "14px",
    lineHeight: "20px",
  },
  Title_400_11: {
    font: "Unbounded",
    weight: "400",
    size: "10.93px",
    lineHeight: "15.61px",
  },
  Title_400_10: {
    font: "Unbounded",
    weight: "400",
    size: "10.03px",
    lineHeight: "14.33px",
  },
  Title_400_8: {
    font: "Unbounded",
    weight: "400",
    size: "8.23px",
    lineHeight: "11.76px",
  },
  Title_400_7: {
    font: "Unbounded",
    weight: "400",
    size: "6.96px",
    lineHeight: "9.95px",
  },
  // Тексты
  Text_500_14: {
    font: "Roboto",
    weight: "500",
    size: "14px",
    lineHeight: "20px",
  },
  Text_500_11: {
    font: "Roboto",
    weight: "500",
    size: "10.93px",
    lineHeight: "15.61px",
  },
  Text_500_10: {
    font: "Roboto",
    weight: "500",
    size: "10.03px",
    lineHeight: "14.33px",
  },
  Text_500_8: {
    font: "Roboto",
    weight: "500",
    size: "8.23px",
    lineHeight: "11.76px",
  },
  Text_500_7: {
    font: "Roboto",
    weight: "500",
    size: "6.96px",
    lineHeight: "9.95px",
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
  Text_400_11: {
    font: "Roboto",
    weight: "400",
    size: "10.93px",
    lineHeight: "15.61px",
  },
  Text_400_10: {
    font: "Roboto",
    weight: "400",
    size: "10.03px",
    lineHeight: "14.33px",
  },
  Text_400_8: {
    font: "Roboto",
    weight: "400",
    size: "8.23px",
    lineHeight: "11.76px",
  },
  Text_400_7: {
    font: "Roboto",
    weight: "400",
    size: "6.96px",
    lineHeight: "9.95px",
  },
} as const;

type Typography = (typeof Typography)[keyof typeof Typography];

export { Typography };
