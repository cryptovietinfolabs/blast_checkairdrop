import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import Title from "@/components/Title";
import { evening } from "@/constants/fonts";
import useUiContext from "@/contexts/UiProvider";
import GetMoreCard from "@/layouts/GetMoreCard";

import EligibleCard from "../EligibleCard";
import s from "./style.module.scss";

interface NotifModalProps {
  status: "success" | "failed";
  isHoldNFTQualified: boolean;
  isHoldPepeQualified: boolean;
  isDepositBlastQualified: boolean;
  collections: string[];
}

export default function NotifModal({
  status,
  isHoldNFTQualified,
  isHoldPepeQualified,
  isDepositBlastQualified,
  collections,
}: NotifModalProps): React.ReactElement {
  const { setIsReturnHome } = useUiContext();

  return (
    <>
      <Stack flexDirection={{ base: "column-reverse", md: "row" }} gap={6}>
        <Card className={s.notif}>
          <CardHeader>
            <Box textAlign="center">
              <Title color="brand.yellow.200" size="md">
                {`${status === "success" ? "#Bleble Eligible!" : "Sorry"}`}
              </Title>
            </Box>
          </CardHeader>
          <CardBody>
            <Stack spacing={6}>
              <Text color="brand.yellow.100" fontSize="xl" textAlign="center">
                {`${status === "success" ? "REACHED the Blast membership!" : "You are not on the Holders list"}`}
              </Text>

              <Box className={s.notif_img}>
                {status === "success" ? (
                  <Image src="/bleble-happy.png" alt="happy ble ble" fill />
                ) : (
                  <Image src="/bleble-sad.png" alt="sad ble ble" fill />
                )}
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Stack gap={6}>
          <GetMoreCard />
          {status === "success" && (
            <EligibleCard
              collections={collections}
              isHoldNFTQualified={isHoldNFTQualified}
              isHoldPepeQualified={isHoldPepeQualified}
              isDepositBlastQualified={isDepositBlastQualified}
            />
          )}
        </Stack>
      </Stack>

      <Flex alignSelf="center">
        {status === "success" ? (
          <Button width="fit-content" isDisabled>
            <Text className={evening.className} fontSize="2xl">
              Claim your airdrop: coming soon
            </Text>
          </Button>
        ) : (
          <Button
            width="fit-content"
            onClick={(): void => {
              setIsReturnHome(true);
            }}
          >
            <Text className={evening.className} fontSize="2xl">
              Back to home
            </Text>
          </Button>
        )}
      </Flex>
    </>
  );
}
