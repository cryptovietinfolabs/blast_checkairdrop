import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

import { commonBadge } from "../commons";
import { colors } from "../commons/colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    bg: "green.300",
    color: "gray.800",
    ...commonBadge.baseStyle,
  },
};

export const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      borderRadius: "24px",
      color: "brand.camo.400",
      bg: "brand.camo.200",
      transition: "all 0.3s ease-in-out",
      fontWeight: "bolder",
      _hover: {
        bg: "brand.yellow.200",
      },
      _disabled: {
        _hover: {
          bg: "brand.camo.300",
        },
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
    outline: {
      borderRadius: "24px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "brand.camo.200",
      height: "100%",
      px: "4px",
      py: "4px",
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
      bg: "#1C1E1A",
      backdropFilter: "blur(70px)",
      borderRadius: "2xl",
    },
    header: {
      px: 0,
      pt: 0,
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

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      color: "paragraph.accent.100",
    },
  },
  sizes: {
    lg: {
      field: {
        height: "56px",
      },
    },
  },
  variants: {
    filled: {
      field: {
        color: "paragraph.accent.300",
        fontSize: "1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "brand.camo.300",
        borderRadius: "3xl",
        background: "rgba(64, 72, 51, 0.5)",
        // _invalid: {
        //   borderColor: "secondary.original.100",
        //   boxShadow: "secondary.original.100",
        // },
        _focusVisible: {
          borderColor: "brand.camo.300",
        },
        _placeholder: {
          color: "brand.camo.200",
        },
      },
    },

    search: {
      field: {
        color: "paragraph.accent.200",
        pl: 14,
        bg: "unset",
        fontSize: "sm",

        _placeholder: {
          color: "currentColor",
        },
      },
    },
  },
};

const Popover: ComponentStyleConfig = {
  parts: [],

  baseStyle: {
    dialog: {
      bg: "brand.camo.400",
      backdropFilter: "blur(70px)",
    },
    content: {
      padding: {
        base: 2,
        lg: 4,
      },
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "brand.camo.300",
      bg: "brand.camo.400",
      backdropFilter: "blur(70px)",
      borderRadius: "2xl",
    },
    body: {
      p: 0,
    },
  },
};

const Modal: ComponentStyleConfig = {
  parts: [],

  baseStyle: {
    dialogContainer: {
      backdropFilter: "blur(8px)",
    },
    dialog: {
      p: "6",
      bg: "brand.camo.400",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "brand.camo.300",
      borderRadius: "2xl",
    },
    body: {
      margin: "auto",
    },
  },
};

const Select: ComponentStyleConfig = {
  baseStyle: {
    field: {
      color: "paragraph.accent.100",
    },
  },
  sizes: {
    lg: {
      field: {
        height: "56px",
      },
    },
  },
  variants: {
    filled: {
      field: {
        color: "paragraph.accent.300",
        fontSize: "1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "brand.camo.300",
        borderRadius: "3xl",
        background: "rgba(64, 72, 51, 0.5)",
        _focusVisible: {
          borderColor: "brand.camo.300",
        },
        _placeholder: {
          color: "brand.camo.200",
        },
      },
    },
  },
};

const Table: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    simple: {
      th: {
        color: "brand.yellow.200",
        borderColor: "brand.camo.300",
      },
      td: {
        borderColor: "brand.camo.300",
      },
    },
  },
};

const List: ComponentStyleConfig = {
  baseStyle: {
    item: {
      p: 2,
      "&::marker": {
        color: "brand.yellow.100",
        fontSize: "sm",
      },
    },
  },
};

const themeDark = extendTheme({
  colors,
  config,

  components: {
    Badge,
    Button,
    Card,
    Input,
    Popover,
    Modal,
    Select,
    Table,
    List,
  },
});

export default themeDark;
