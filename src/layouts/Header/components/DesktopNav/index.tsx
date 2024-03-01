import { Button, HStack, Text } from "@chakra-ui/react";

import { INavItem } from "@/constants/navList";

import s from "../../style.module.scss";

interface IDesktopNav {
  navList: INavItem[];
}

export default function DesktopNav({
  navList,
}: IDesktopNav): React.ReactElement {
  return (
    <HStack gap={6}>
      {navList.map((navItem) => {
        return (
          <Button
            variant="ghost"
            key={navItem.name}
            className={`${s.header_link}`}
            as="a"
            href={navItem.link}
          >
            <Text fontSize="md" fontWeight="bold">
              {navItem.name}
            </Text>
          </Button>
        );
      })}
    </HStack>
  );
}
