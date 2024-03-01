"use client";

import { Box, Flex, Stack } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import Container from "@/components/Container";

import ConnectWalletBtn from "./components/ConnectWalletBtn";
import NotifModal from "./components/NotifModal";
import Requirements from "./components/Requirements";
import s from "./style.module.scss";

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
