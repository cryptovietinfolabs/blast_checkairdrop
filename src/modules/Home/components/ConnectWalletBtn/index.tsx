"use client";

import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";

import { evening } from "@/constants/fonts";

import { WalletOptions } from "../WalletOptions";
import s from "./style.module.scss";

export default function ConnectWalletBtn(): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        variant="solid"
        size="sm"
        className={s.connectWalletBtn}
        onClick={onOpen}
        py="15px"
        px="24px"
      >
        <Text className={evening.className} fontSize="2xl">
          Connect to Wallet
        </Text>
      </Button>
      <WalletOptions isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
