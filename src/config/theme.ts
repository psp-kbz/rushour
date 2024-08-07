import { colorsTuple, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  /** Put your mantine theme override here */
  primaryColor: "primary",
  colors: {
    primary: colorsTuple(Array.from({ length: 10 }, () => "#002C76")),
  },
  defaultRadius: "md",
  headings: {
    fontFamily: "Poppins, sans-serif",
  },
  fontFamily: "Poppins, sans-serif",
};
