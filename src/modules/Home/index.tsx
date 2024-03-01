"use client";

import { Flex, HStack, Stack } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import Container from "@/components/Container";

import GetMoreCard from "../../layouts/GetMoreCard";
import ConnectWalletBtn from "./components/ConnectWalletBtn";
import NotifModal from "./components/NotifModal";
import Requirements from "./components/Requirements";
import s from "./style.module.scss";

export default function HomePage(): React.ReactElement {
  const { isConnected } = useAccount();
  return (
    <Container className={s.homePage}>
      <HStack alignItems="stretch" gap={8}>
        <Stack spacing={6} className={s.homePage_inner}>
          {!isConnected && (
            <Stack
              flexDirection={{ base: "column-reverse", md: "row" }}
              gap={6}
            >
              <Requirements />
              <GetMoreCard />
            </Stack>
          )}

          <Flex alignSelf="center">{!isConnected && <ConnectWalletBtn />}</Flex>

          {isConnected && <NotifModal status="success" />}
        </Stack>
      </HStack>
    </Container>
  );
}
