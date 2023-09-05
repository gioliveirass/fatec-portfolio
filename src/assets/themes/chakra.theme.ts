import { extendBaseTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const chakraTheme = extendBaseTheme({
  breakpoints,
  components: {
    Button: {
      defaultProps: {
        colorScheme: "purple",
      },
    },
  },
});

export default chakraTheme;
