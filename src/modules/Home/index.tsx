"use client";

import { Flex, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import Container from "@/components/Container";
import useHoldNFT from "@/hooks/web3/useHoldNFT";
import useHoldPepe from "@/hooks/web3/useHoldPepe";

import GetMoreCard from "../../layouts/GetMoreCard";
import ConnectWalletBtn from "./components/ConnectWalletBtn";
import NotifModal from "./components/NotifModal";
import Requirements from "./components/Requirements";
import s from "./style.module.scss";

export default function HomePage(): React.ReactElement {
  const { isConnected, address: userAddress } = useAccount();
  const [qualified, setQualified] = useState<"success" | "failed">("failed");

  const { isQualified: isHoldNFTQualified, collections } = useHoldNFT(
    userAddress || "0x0",
  );
  const isHoldPepeQualified = useHoldPepe(userAddress || "0x0");
  // const isDepositBlastQualified = useDepositBlast(userAddress || "0x0");
  const [isDepositBlastQualified, setIsDepositBlastQualified] =
    useState<boolean>(false);

  useEffect(() => {
    fetch(`https://api.bleble.vip/deposit/${userAddress}`)
      .then((res) => res.json())
      .then((data) => {
        setIsDepositBlastQualified(data.status);
      });
  }, []);

  useEffect(() => {
    setQualified(
      isHoldNFTQualified || isHoldPepeQualified || isDepositBlastQualified
        ? "success"
        : "failed",
    );
  }, [isHoldNFTQualified, isHoldPepeQualified]);

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

          {isConnected && (
            <NotifModal
              status={qualified}
              collections={collections}
              isHoldNFTQualified={isHoldNFTQualified}
              isHoldPepeQualified={isHoldPepeQualified}
              isDepositBlastQualified={isDepositBlastQualified}
            />
          )}
        </Stack>
      </HStack>
    </Container>
  );
}
