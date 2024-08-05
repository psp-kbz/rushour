import { colorsTuple, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  /** Put your mantine theme override here */
  primaryColor: "primary",
  colors: {
    primary: colorsTuple(Array.from({ length: 10 }, () => "#1e90ff")),
  },
  defaultRadius: "md",
  headings: {
    fontFamily: "Lexend Deca, sans-serif",
  },
  fontFamily: "Verdana, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
};
