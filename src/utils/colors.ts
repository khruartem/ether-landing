const Colors = {
  Navy: "#0B3954",
  Nephritis100: "#2ECC71",
  Nephritis120: "#21AA58",
  Dark100: "#4F4F4F",
  Dark80: "#939393",
  Light100: "#FFFFFF",
  Light80: "#F7F7F7",
  Light60: "#FDFDFD",
  Light30: "#E6E6E6",
  Light20: "#BFBFBF",
  Orange100: "#FB8200",
  Error100: "#E70000",
  None: "transparent",
} as const;

type Colors = (typeof Colors)[keyof typeof Colors];

export { Colors };
