import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandGreen: {
    100: "rgb(77 255 167 / 10%)",
    500: "#0fa",
  },
  brandYellow: {
    100: "#f0e00a",
  },
  brandDark: {
    100: "#2b3e4b",
    200: "#172f41",
  },
  brandOrange: "#ee6123",
};

export const theme = extendTheme({
  colors,
});
