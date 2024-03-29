"use client";

import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import Container from "@/components/Container";
import { evening } from "@/constants/fonts";
import useUiContext from "@/contexts/UiProvider";
import useHoldNFT from "@/hooks/web3/useHoldNFT";
import useHoldPepe from "@/hooks/web3/useHoldPepe";

import GetMoreCard from "../../layouts/GetMoreCard";
import ConnectWalletBtn from "./components/ConnectWalletBtn";
import NotifModal from "./components/NotifModal";
import Requirements from "./components/Requirements";
import s from "./style.module.scss";

export default function HomePage(): React.ReactElement {
  const { isReturnHome, setIsReturnHome } = useUiContext();
  const { isConnected, address: userAddress } = useAccount();
  const [qualified, setQualified] = useState<"success" | "failed">("failed");

  const { isQualified: isHoldNFTQualified, collections } = useHoldNFT(
    userAddress || "0x0",
  );
  const isHoldPepeQualified = useHoldPepe(userAddress || "0x0");
  // const isDepositBlastQualified = useDepositBlast(userAddress || "0x0");
  const [isDepositBlastQualified, setIsDepositBlastQualified] =
    useState<boolean>(true);

  useEffect(() => {
    (async (): Promise<void> => {
      fetch(`https://api.bleble.vip/deposit/${userAddress}`)
        .then((res) => res.json())
        .then((data) => {
          setIsDepositBlastQualified(data.status);
        });
    })();
  }, []);

  useEffect(() => {
    setQualified(
      isHoldNFTQualified || isHoldPepeQualified || isDepositBlastQualified
        ? "success"
        : "failed",
    );
  }, [isHoldNFTQualified, isHoldPepeQualified, isDepositBlastQualified]);

  useEffect(() => {
    if (isConnected) setIsReturnHome(false);
  }, [isConnected]);

  return (
    <Container className={s.homePage}>
      <HStack alignItems="stretch" gap={8}>
        <Stack spacing={6} className={s.homePage_inner}>
          {(!isConnected || isReturnHome) && (
            <Stack
              flexDirection={{ base: "column-reverse", md: "row" }}
              gap={6}
            >
              <Requirements />
              <GetMoreCard />
            </Stack>
          )}

          <Flex alignSelf="center">
            {isConnected && isReturnHome && (
              <Button
                onClick={(): void => {
                  setIsReturnHome(false);
                }}
              >
                <Text className={evening.className} fontSize="2xl">
                  Airdrop status
                </Text>
              </Button>
            )}
          </Flex>
          <Flex alignSelf="center">{!isConnected && <ConnectWalletBtn />}</Flex>

          {isConnected && !isReturnHome && (
            <NotifModal
              status={qualified}
              isHoldNFTQualified={isHoldNFTQualified}
              isHoldPepeQualified={isHoldPepeQualified}
              isDepositBlastQualified={isDepositBlastQualified}
              collections={collections}
            />
          )}
        </Stack>
      </HStack>
    </Container>
  );
}
