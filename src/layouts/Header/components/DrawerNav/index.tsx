import { Button, Text } from "@chakra-ui/react";

import { navList } from "@/constants/navList";

import s from "./style.module.scss";

interface DrawerNavProps {
  isOpen: boolean;
  onOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerNav({
  isOpen,
  onOpenNav,
}: DrawerNavProps): React.ReactElement {
  return (
    <nav className={`${s.mobileNav} ${isOpen ? s.open : ""}`}>
      <div className={s.mobileNav_nav}>
        {navList.map((item) => (
          <Button
            key={item.name}
            variant="text"
            className={`${s.mobileNav_item}
          ${s.heading1}`}
            onClick={() => {
              onOpenNav(false);
            }}
          >
            <Text fontSize="2xl" color="brand.yellow.200">
              {item.name}
            </Text>
          </Button>
        ))}
      </div>
    </nav>
  );
}
