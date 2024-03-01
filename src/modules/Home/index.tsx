"use client";

import { Box, Flex, Stack } from "@chakra-ui/react";

import Container from "@/components/Container";

import s from "./style.module.scss";
import ConnectWalletBtn from "./components/ConnectWalletBtn";
import { Account } from "./components/Account";
import { useAccount } from "wagmi";
import NotifModal from "./components/NotifModal";
import Requirements from "./components/Requirements";

export default function HomePage(): React.ReactElement {
  const { isConnected } = useAccount();
  return (
    <Container className={s.homePage}>
      <Box>
        <Stack spacing={6} className={s.homePage_inner}>
          {!isConnected && <Requirements />}

          <Flex alignSelf="center">{!isConnected && <ConnectWalletBtn />}</Flex>

          {isConnected && <NotifModal status="failed" />}
        </Stack>
      </Box>
    </Container>
  );
}
