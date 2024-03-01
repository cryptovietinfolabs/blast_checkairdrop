"use client";
import { Button, Flex, Text } from "@chakra-ui/react";

import { INavItem } from "@/constants/navList";

import s from "./style.module.scss";
interface IMobileNav {
  navList: INavItem[];
}

export default function MobileNav({ navList }: IMobileNav): React.ReactElement {
  return (
    <Flex className={`${s.mobileNav}`} justifyContent="space-between">
      {navList.map((navItem) => {
        return (
          <Button
            variant="ghost"
            key={navItem.name}
            className={`${s.MmbileNav_link}`}
          >
            <Text fontSize="md" fontWeight="bold">
              {navItem.name}
            </Text>
          </Button>
        );
      })}
    </Flex>
  );
}
