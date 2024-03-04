import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useDisconnect } from "wagmi";

import Title from "@/components/Title";
import { evening } from "@/constants/fonts";
import GetMoreCard from "@/layouts/GetMoreCard";

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
  const { disconnect } = useDisconnect();

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
              <UnorderedList>
                {isHoldNFTQualified && (
                  <ListItem>
                    <Stack>
                      <Text fontSize="md" color="brand.camo.200">
                        NFT Holder: {collections.join(", ")}
                      </Text>
                    </Stack>
                  </ListItem>
                )}
                {isHoldPepeQualified && (
                  <ListItem>
                    <Text
                      fontSize="md"
                      color="brand.camo.200"
                      display="flex"
                      alignItems="center"
                    >
                      Top 30% Pepe Holders
                    </Text>
                  </ListItem>
                )}
                {isDepositBlastQualified && (
                  <ListItem>
                    <Text
                      fontSize="md"
                      color="brand.camo.200"
                      display="flex"
                      alignItems="center"
                    >
                      Staked 0.01+ $ETH on Blast
                    </Text>
                  </ListItem>
                )}
              </UnorderedList>
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
        <GetMoreCard />
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
            onClick={() => {
              disconnect();
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
