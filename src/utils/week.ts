const Week = {
  1: "пн",
  2: "вт",
  3: "ср",
  4: "чт",
  5: "пт",
  6: "сб",
  0: "вск",
} as const;

type Week = (typeof Week)[keyof typeof Week];

export { Week };
