import { As, ChakraProps, Text } from "@chakra-ui/react";

import { evening } from "@/constants/fonts";

import s from "./style.module.scss";

interface ITitle extends ChakraProps {
  className?: string;
  children: string;
  size?: "lg" | "md" | "sm";
  as?: As;
}

export default function Title({
  size = "lg",
  className,
  children,
  color,
  as = "h2",
}: ITitle): React.ReactElement {
  const classNameSize = s[`title__${size}`];

  return (
    <Text
      as={as}
      className={`${s.title} ${classNameSize} ${className} ${evening.className}`}
      color={color}
      lineHeight="100%"
    >
      {children}
    </Text>
  );
}
