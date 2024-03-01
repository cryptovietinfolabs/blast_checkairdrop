import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

import { commonBadge } from "../commons";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    bg: "blue.500",
    color: "white",
    ...commonBadge.baseStyle,
  },
};

export const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      color: "black",
      bg: "brand.yellow.200",
      transition: "all 0.3s ease-in-out",
      _hover: {
        bg: "brand.yellow.200",
        boxShadow: "0 0 25px yellow",
      },
    },
    ghost: {
      color: "brand.camo.200",
      _hover: {
        color: "brand.yellow.100",
        svg: {
          transition: "all 0.3s ease-in-out",
          fill: "brand.yellow.100",
        },
      },
    },
    icon: {
      bg: "unset",
    },
  },
};

export const Card: ComponentStyleConfig = {
  parts: [],
  baseStyle: {
    container: {
      padding: {
        base: 4,
        lg: 6,
      },
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "brand.camo.300",
      bg: "unset",
      backdropFilter: "blur(70px)",
      borderRadius: "2xl",
    },
    header: {
      px: 0,
      pt: "50px",
    },
    body: {
      px: 0,
      py: 0,
    },
    footer: {
      px: 0,
      pb: 0,
    },
  },
};

const themeLight = extendTheme({
  config,
  components: {
    Badge,
    Button,
  },
});

export default themeLight;
