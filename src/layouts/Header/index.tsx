"use client";

import { Box, Button, HStack } from "@chakra-ui/react";
import Container from "@Components/Container";
import Image from "next/image";
import { useState } from "react";
import { useAccount } from "wagmi";

import { navList } from "@/constants/navList";
import useWindowSize from "@/hooks/common/useWindowSize";
import { Account } from "@/modules/Home/components/Account";
import ConnectWalletBtn from "@/modules/Home/components/ConnectWalletBtn";

import DesktopNav from "./components/DesktopNav";
import DrawerNav from "./components/DrawerNav";
import s from "./style.module.scss";

export default function Header(): React.ReactElement {
  const { isDesktop } = useWindowSize();
  const { isConnected } = useAccount();
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <Box as="header" className={`${s.header}`}>
      <Container>
        <HStack justifyContent="space-between">
          <Button
            bg="transparent"
            _hover={{ bg: "transparent" }}
            as="a"
            href="/"
          >
            <Box className={s.header_logo}>
              <Image src="/bleble-face.png" alt="logo" fill />
            </Box>
          </Button>

          <HStack>
            {!isDesktop ? (
              <>
                <div
                  className={`${s.hamburger} ${isOpenNav ? s.open : ""}`}
                  onClick={() => setIsOpenNav(!isOpenNav)}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <DrawerNav isOpen={isOpenNav} onOpenNav={setIsOpenNav} />
              </>
            ) : (
              <DesktopNav navList={navList} />
            )}
            {isConnected ? <Account /> : <ConnectWalletBtn />}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
