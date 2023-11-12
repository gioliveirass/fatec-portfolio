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

    Text: {
      variants: {
        sectionTitle: {
          fontSize: "xl",
          fontWeight: "bold",
          textAlign: "center",
          fontColor: "blackAlpha.900",
        },

        sectionBody: {
          fontSize: "md",
          textAlign: "center",
          fontColor: "blackAlpha.900",
        },
      },
    },
  },
});

export default chakraTheme;
