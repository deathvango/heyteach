export const makeUnit = (spacing: number) => {
  return spacing.toString().concat(ThemeGlobals.unit);
};

export const ThemeGlobals = {
  appBar: {
    height: 4,
  },
  unit: "rem",
  spacing: 1,
};
